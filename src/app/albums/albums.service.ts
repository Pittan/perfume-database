import { Injectable } from '@angular/core'
import { Album, AlbumId, ALBUMS, SINGLES, SongId, SONGS, Tour, TOURS } from '../../data'

const ALBUM_AND_SINGLES = [...ALBUMS, ...SINGLES]

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor () { }

  getAlbumById (id: number): Album | undefined {
    return ALBUM_AND_SINGLES.find(i => i.id === id)
  }

  getAlbums (): Album[] {
    return ALBUM_AND_SINGLES
  }


  convertSongTitle (songId: SongId): string {
    return SONGS.find(s => s.id === songId).title
  }

  getAlbumRelatedTours (albumId: AlbumId): Tour[] {
    return TOURS.filter(t => t.related_album === albumId)
  }
}
