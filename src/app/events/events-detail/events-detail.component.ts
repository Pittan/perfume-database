import { Component, OnInit } from '@angular/core'
import { Album, Event, SetListItem, SetListItemDefinition, Tour } from '../../../data'
import { AlbumsService } from '../../albums/albums.service'
import { ActivatedRoute } from '@angular/router'
import { EventsService } from '../events.service'

@Component({
  selector: 'app-events-detail',
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.sass']
})
export class EventsDetailComponent implements OnInit {

  private id: number

  event: Event

  relatedTour: Tour

  constructor (
    private events: EventsService,
    private activatedRoute: ActivatedRoute
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
