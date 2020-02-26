import { Injectable } from '@angular/core'
import { Event, EVENTS, SongId, SONGS, Tour, TourId, TOURS } from '../../data'

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor () { }

  getEventById (eventId: number): Event | undefined {
    return EVENTS.find(ev => ev.id === eventId)
  }

  getEvents (): Event[] {
    return EVENTS
  }

  convertSongTitle (songId: SongId): string {
    return SONGS.find(s => s.id === songId).title
  }

  getRelatedTour (tourId: TourId): Tour | undefined {
    return TOURS.find(t => t.id === tourId)
  }

}
