import { Component, OnInit } from '@angular/core'
import { AlbumsService } from '../albums.service'
import { ActivatedRoute } from '@angular/router'
import { Album, Tour } from '../../../data'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-albums-detail',
  templateUrl: './albums-detail.component.html',
  styleUrls: ['./albums-detail.component.sass']
})
export class AlbumsDetailComponent implements OnInit {

  private id: number

  album: Album

  tours: Tour[]

  constructor (
    private albums: AlbumsService,
    private activatedRoute: ActivatedRoute,
    private title: Title
  ) { }

  ngOnInit (): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.id = Number(params['id'])
      }
      this.album = this.albums.getAlbumById(this.id)
      this.tours = this.albums.getAlbumRelatedTours(this.id)
      this.title.setTitle(`${this.album.title} - PerfumeDB`)
    })
  }

  getSongTitle (id) {
    return this.albums.convertSongTitle(id)
  }

}
