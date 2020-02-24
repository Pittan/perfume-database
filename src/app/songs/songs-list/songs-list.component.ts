import { Component, OnInit } from '@angular/core'
import { Song, SONGS } from '../../../data'

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.sass']
})
export class SongsListComponent implements OnInit {

  showInstrumental = false

  songs: Song[] = []

  constructor () { }

  ngOnInit (): void {
    this.songs = SONGS.filter(s => {
      if (this.showInstrumental) return true
      return !s.is_instrumental
    })
  }

}
