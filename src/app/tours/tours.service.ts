import { Injectable } from '@angular/core'
import { Album, AlbumId, Event, EVENTS, SongId, SONGS, Tour, TourId, TOURS } from '../../data'

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  constructor () { }

  getTourById (id: number): Tour | undefined {
    return TOURS.find(i => i.id === id)
  }

  getTours (): Tour[] {
    return TOURS
  }

  getRelatedEvents (tourId: TourId): Event[] {
    return EVENTS.filter(ev => {
      return ev.tour_id === tourId
    })
  }

}
