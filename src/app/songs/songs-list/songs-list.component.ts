import { Component, OnInit } from '@angular/core'
import { Song } from '../../../data'
import { SongsService } from '../songs.service'
import * as Fuse from 'fuse.js'
import { animate, style, transition, trigger } from '@angular/animations'

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
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.sass'],
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
export class SongsListComponent implements OnInit {

  showInstrumental = false

  songs: Song[] = []

  private fuse: Fuse<any, any>
  query = ''

  constructor (
    private songsService: SongsService
  ) { }

  ngOnInit (): void {
    // 初期表示
    this.songs = this.getSongs()
    this.fuse = new Fuse(this.songs, FUSE_OPTIONS) // "list" is the item array
  }

  getSongs (): Song[] {
    return this.songsService.getSongs({ removeInstrumental: !this.showInstrumental })
  }

  showInstrumentalChanged () {
    this.getSongs()
    this.fuse.setCollection(this.getSongs())
    this.queryChange()
  }

  queryChange () {
    if (this.query.length > 0) {
      this.songs = this.fuse.search<Song, false, false>(this.query)
    } else {
      this.songs = this.getSongs()
    }
  }

}
