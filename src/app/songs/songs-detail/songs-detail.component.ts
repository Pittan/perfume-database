import {Component, OnDestroy, OnInit} from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Event, Song } from '../../../data'
import { SongsService } from '../songs.service'
import { Title } from '@angular/platform-browser'
import { SettingsService } from '../../shared/settings.service';
import {Subscription} from "rxjs";

type EventForList = Event & { live_house_name?: string, isRelatedHit?: boolean }

@Component({
  selector: 'app-songs-detail',
  templateUrl: './songs-detail.component.html',
  styleUrls: ['./songs-detail.component.sass']
})
export class SongsDetailComponent implements OnInit, OnDestroy {

  id: number

  song: Song

  relatedLives: EventForList[] = []

  allowSpoiler = false

  private subscription = new Subscription()

  constructor (
    private songs: SongsService,
    private activeRoute: ActivatedRoute,
    private settings: SettingsService,
    private title: Title
  ) { }

  ngOnInit (): void {
    this.subscription.add(
      this.activeRoute.params.subscribe(params => {
        if (params['id']) {
          this.id = Number(params['id'])
        }
      })
    )

    this.subscription.add(
      this.settings.allowSpoiler.subscribe(val => {
        this.allowSpoiler = val
        this.updateEventList()
      })
    )
  }

  updateEventList (): void {
    this.song = this.songs.getSongById(this.id)
    this.relatedLives = this.songs.getRelatedLives(this.id).filter(ev => {
      if (this.allowSpoiler) return ev
      return !ev.prevent_spoiler && !ev?.tour?.prevent_spoiler
    })
    this.title.setTitle(`${this.song.title} - PerfumeDB`)
  }

  ngOnDestroy (): void {
    this.subscription.unsubscribe()
  }
}
