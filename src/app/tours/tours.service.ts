import { Injectable } from '@angular/core'
import { Album, AlbumId, ALBUMS, Event, EVENTS, LiveHouse, LiveHouseId, PLACES, SongId, SONGS, Tour, TourId, TOURS } from '../../data'

type EventForList = Event & { live_house_name?: string }

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

  getRelatedEvents (tourId: TourId): EventForList[] {
    return EVENTS.filter(ev => {
      return ev.tour_id === tourId
    }).map((ev: EventForList) => {
      return {
        ...ev,
        live_house_name: PLACES.find(p => p.id === ev.live_house)?.name
      }
    })
  }

  getRelatedAlbum (albumId: AlbumId): Album | undefined {
    return ALBUMS.find(a => a.id === albumId)
  }

}
