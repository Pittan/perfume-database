import {Component, OnDestroy, OnInit} from '@angular/core'
import { Album, Event, LiveHouse, SetListItem, SetListItemDefinition, SongId, SONGS, Tour } from '../../../data'
import { ActivatedRoute } from '@angular/router'
import { EventsService } from '../events.service'
import { Title } from '@angular/platform-browser'
import { flatten } from 'lodash-es'
import { SpotifyService } from '../../shared/spotify.service'
import { MatSnackBar } from '@angular/material/snack-bar'
import { AuthService } from '../../shared/auth.service'
import { MusicKitClientService } from '../../ngx-music-kit/music-kit-client.service'
import { environment } from '../../../environments/environment'
import { Subscription } from 'rxjs';
import {SettingsService} from "../../shared/settings.service";

@Component({
  selector: 'app-events-detail',
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.sass']
})
export class EventsDetailComponent implements OnInit, OnDestroy {

  private id: number
  private subscription = new Subscription()

  event: Event

  relatedTour: Tour

  liveHouse: LiveHouse

  busy = ''

  hasSpoiler = true
  userAgreedWithSpoiler = false

  constructor (
    private events: EventsService,
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private spotify: SpotifyService,
    private snackBar: MatSnackBar,
    private auth: AuthService,
    private appleMusic: MusicKitClientService,
    private settings: SettingsService
  ) { }

  ngOnInit (): void {
    this.subscription.add(
      this.settings.allowSpoiler.subscribe(val => {
        this.userAgreedWithSpoiler = val;
      })
    )
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.id = Number(params['id'])
      }
      this.event = this.events.getEventById(this.id)
      if (this.event.tour_id) {
        this.relatedTour = this.events.getRelatedTour(this.event.tour_id)
      }

      if (!(this.relatedTour.prevent_spoiler || this.event.prevent_spoiler)) {
        this.hasSpoiler = false
      }

      if (this.event.live_house) {
        this.liveHouse = this.events.getLiveHouse(this.event.live_house)
      }
      this.title.setTitle(`${this.event.name}${this.event.sub_name ? ' ' + this.event.sub_name : ''} - PerfumeDB`)
    })
  }

  async generatePlaylist (service: 'spotify' | 'appleMusic') {
    const name = `Perfume - ` + this.event.name + (this.event.sub_name ? ' ' + this.event.sub_name : '')
    const description = this.event.date

    let songs: any[] = []
    flatten(this.event.songs).forEach(setlistItem => {
      if (this.isSetListItemDefinition(setlistItem)) {
        if (!setlistItem.songs) return
        const ss = setlistItem.songs.filter(s => !this.isSetListItemDefinition(s))
        songs = [...songs, ...ss ]
        return
      }
      songs = [...songs, setlistItem]
    })

    if (service === 'spotify') {
      if (!this.spotify.isLoggedIn()) {
        this.auth.open()
        return
      }
      this.busy = 'spotify'

      let ids = songs.map(s => {
        return SONGS.find(so => so.id === s)?.subscriptions?.spotify
      }).filter(s => s)

      const playlist = await this.spotify.createPlaylist(this.spotify.spotifyUserProfile.value.id, {
        name,
        description,
        public: false
      })
      this.spotify.addTracksToPlaylist(playlist.id, ids).then(res => {
        this.busy = ''
        let snackBarRef = this.snackBar.open('Created !!', 'Check on Spotify', {
          duration: 8000
        })
        snackBarRef.onAction().subscribe(() => {
          window.open(playlist.external_urls.spotify)
        })
      })
    } else if (service === 'appleMusic') {
      this.appleMusic.initClient({
        developerToken: environment.appleMusic.developerToken,
        app: {
          name: environment.appleMusic.name,
          build: environment.appleMusic.build
        }
      }).then(() => {
        // If user is not authorized...
        if (!this.appleMusic.musicKitInstance.isAuthorized) {
          // show login dialog
          this.appleMusic.authorize()
          return
        }
        this.busy = 'appleMusic'

        let ids = songs.map(s => {
          return SONGS.find(so => so.id === s)?.subscriptions?.apple_music
        }).filter(s => s)
        this.appleMusic.createPlaylist(name, description, ids).subscribe(res => {
          this.busy = ''
          let snackBarRef = this.snackBar.open('Created!!', undefined, {
            duration: 8000
          })
        })
      })
    }
  }

  ngOnDestroy () {
    this.subscription.unsubscribe()
  }

  getSongTitle (item: SetListItem) {
    if (this.isSetListItemDefinition(item)) {
      return item.title
    } else {
      return this.events.convertSongTitle(item)
    }
  }

  /**
   * User Defined Type Guard
   */
  private isSetListItemDefinition (arg: any): arg is SetListItemDefinition {
    return arg.title !== undefined
  }

}
