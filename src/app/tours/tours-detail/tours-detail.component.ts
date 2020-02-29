import { Component, OnInit } from '@angular/core'
import { Album, Event, Song, Tour } from '../../../data'
import { SongsService } from '../../songs/songs.service'
import { ActivatedRoute } from '@angular/router'
import { ToursService } from '../tours.service'

type EventForList = Event & { live_house_name?: string }

@Component({
  selector: 'app-tours-detail',
  templateUrl: './tours-detail.component.html',
  styleUrls: ['./tours-detail.component.sass']
})
export class ToursDetailComponent implements OnInit {

  private id: number

  tour: Tour

  relatedLives: EventForList[] = []

  relatedAlbum: Album

  constructor (
    private tours: ToursService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit (): void {
    this.activeRoute.params.subscribe(params => {
      if (params['id']) {
        this.id = Number(params['id'])
      }
      this.tour = this.tours.getTourById(this.id)
      this.relatedLives = this.tours.getRelatedEvents(this.id)
      this.relatedAlbum = this.tours.getRelatedAlbum(this.id)
    })
  }
}
