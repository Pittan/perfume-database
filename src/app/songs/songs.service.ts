import { Injectable } from '@angular/core'
import { Event, EVENTS, PLACES, SetListItemDefinition, Song, SongId, SONGS, Tour, TOURS } from '../../data'
import { flatten } from 'lodash-es'

export interface GetSongsOptions {
  removeInstrumental?: boolean
}

type EventForList = Event & { live_house_name?: string, isRelatedHit?: boolean, tour?: Tour, contains_spoiler: boolean }

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor () { }

  // Do something
  getSongById (id: number): Song | undefined {
    return SONGS.find(s => s.id === id)
  }

  getSongs (options: GetSongsOptions = {}) {
    return SONGS.filter(s => {
      const removeInst = Boolean(options.removeInstrumental)
      if (removeInst) { return !s.is_instrumental }
      return true
    })
  }

  getRelatedSongs (songId: number): SongId[] {
    const result: SongId[] = SONGS.filter(s => {
      return s.parent === songId
    }).map(s => s.id)
    const parent = SONGS.find(s => s.id === songId)?.parent
    if (parent !== undefined) result.push(parent)
    return result
  }

  getRelatedLives (songId: number): EventForList[] {
    const relatedSongs = [songId, ...this.getRelatedSongs(songId)]
    return EVENTS.filter(event => {
      const flattened = flatten(event.songs)
      return flattened.some(item => {
        if (this.isSetListItemDefinition(item)) {
          if (!item.songs) return false
          return item.songs.some(so => {
            if (this.isSetListItemDefinition(so)) return false
            return relatedSongs.includes(so)
          })
        }
        return relatedSongs.includes(item)
      })
    }).map((ev: EventForList) => {
      // 会場情報を追加
      return {
        ...ev,
        live_house_name: PLACES.find(p => p.id === ev.live_house)?.name,
        tour: TOURS.find(tour => tour.id === ev.tour_id),
        contains_spoiler: ev.prevent_spoiler || ev?.tour?.prevent_spoiler
      }
    }).map((ev: EventForList) => {
      const flattened = flatten(ev.songs)
      ev.isRelatedHit = !flattened.some(item => {
        if (this.isSetListItemDefinition(item)) {
          if (!item.songs) return false
          return item.songs.some(so => {
            return so === songId
          })
        }
        return item === songId
      })
      return ev
    })
  }

  /**
   * User Defined Type Guard
   */
  private isSetListItemDefinition (arg: any): arg is SetListItemDefinition {
    return arg.songs !== undefined
  }

}
