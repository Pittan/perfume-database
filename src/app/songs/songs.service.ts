import { Injectable } from '@angular/core'
import { Event, EVENTS, PLACES, SetListItemDefinition, Song, SongId, SONGS } from '../../data'
import { flatten } from 'lodash-es'

export interface GetSongsOptions {
  removeInstrumental?: boolean
}

type EventForList = Event & { live_house_name?: string }

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
    console.log(relatedSongs)
    return EVENTS.filter(event => {
      const flattened = flatten(event.songs)
      return flattened.some(item => {
        if (this.isSetListItemDefinition(item)) {
          if (!item.songs) return false
          return item.songs.some(so => {
            return relatedSongs.includes(so)
          })
        }
        return relatedSongs.includes(item)
      })
    }).map((ev: EventForList) => {
      return {
        ...ev,
        live_house_name: PLACES.find(p => p.id === ev.live_house)?.name
      }
    })
  }

  /**
   * User Defined Type Guard
   */
  private isSetListItemDefinition (arg: any): arg is SetListItemDefinition {
    return arg.songs !== undefined
  }

}
