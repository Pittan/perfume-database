import { Component, OnInit } from '@angular/core'
import { Album, Event } from '../../../data'
import * as Fuse from 'fuse.js'
import { animate, style, transition, trigger } from '@angular/animations'
import { EventsService } from '../events.service'

const FUSE_OPTIONS = {
  shouldSort: true,
  threshold: 0.5,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 2,
  keys: [
    'title',
    'kana'
  ]
}

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.sass'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('.4s cubic-bezier(0.36,0.66,0.04,1)', style({ opacity: '1' })),
      ]),
      transition(':leave', [
        style({ opacity: '1', height: '*', marginBottom: '*' }),
        animate('.2s cubic-bezier(0.36,0.66,0.04,1)', style({ opacity: '0', height: '0', marginBottom: '0' })),
      ]),
    ]),
  ]
})
export class EventsListComponent implements OnInit {

  events: Event[] = []

  private fuse: Fuse<any, any>
  query = ''

  constructor (
    private eventsService: EventsService
  ) { }

  ngOnInit (): void {
    // 初期表示
    this.events = this.getEvents()
    this.fuse = new Fuse(this.events, FUSE_OPTIONS) // "list" is the item array
  }

  getEvents (): Event[] {
    return this.eventsService.getEvents()
  }

  queryChange () {
    if (this.query.length > 0) {
      this.events = this.fuse.search<Event, false, false>(this.query)
    } else {
      this.events = this.getEvents()
    }
  }

}
