import { Component, OnInit } from '@angular/core'
import { Album, Song } from '../../../data'
import * as Fuse from 'fuse.js'
import { SongsService } from '../../songs/songs.service'
import { animate, style, transition, trigger } from '@angular/animations'
import { AlbumsService } from '../albums.service'
import { Title } from '@angular/platform-browser'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

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
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.sass'],
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
export class AlbumsListComponent implements OnInit {

  albums: Album[] = []

  private fuse: Fuse<any, any>
  query = ''

  inputFocused = false

  iconMag = faSearch

  constructor (
    private albumsService: AlbumsService,
    private title: Title
  ) { }

  ngOnInit (): void {
    // 初期表示
    this.albums = this.getAlbums()
    this.fuse = new Fuse(this.albums, FUSE_OPTIONS) // "list" is the item array

    this.title.setTitle('Albums - PerfumeDB')
  }

  getAlbums (): Album[] {
    return this.albumsService.getAlbums()
  }

  showInstrumentalChanged () {
    this.getAlbums()
    this.fuse.setCollection(this.getAlbums())
    this.queryChange()
  }

  queryChange () {
    if (this.query.length > 0) {
      this.albums = this.fuse.search<Album, false, false>(this.query)
    } else {
      this.albums = this.getAlbums()
    }
  }

}
