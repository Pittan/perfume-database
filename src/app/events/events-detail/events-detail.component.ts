import { Component, OnInit } from '@angular/core'
import { Album, Event, LiveHouse, SetListItem, SetListItemDefinition, Tour } from '../../../data'
import { AlbumsService } from '../../albums/albums.service'
import { ActivatedRoute } from '@angular/router'
import { EventsService } from '../events.service'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-events-detail',
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.sass']
})
export class EventsDetailComponent implements OnInit {

  private id: number

  event: Event

  relatedTour: Tour

  liveHouse: LiveHouse

  constructor (
    private events: EventsService,
    private activatedRoute: ActivatedRoute,
    private title: Title
  ) { }

  ngOnInit (): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.id = Number(params['id'])
      }
      this.event = this.events.getEventById(this.id)
      if (this.event.tour_id) {
        this.relatedTour = this.events.getRelatedTour(this.event.tour_id)
      }

      if (this.event.live_house) {
        this.liveHouse = this.events.getLiveHouse(this.event.live_house)
      }
      this.title.setTitle(`${this.event.name}${this.event.sub_name ? ' ' + this.event.sub_name : ''} - PerfumeDB`)
    })
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
