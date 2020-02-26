import { Component, OnInit } from '@angular/core'
import { Event, Song, Tour } from '../../../data'
import { SongsService } from '../../songs/songs.service'
import { ActivatedRoute } from '@angular/router'
import { ToursService } from '../tours.service'

@Component({
  selector: 'app-tours-detail',
  templateUrl: './tours-detail.component.html',
  styleUrls: ['./tours-detail.component.sass']
})
export class ToursDetailComponent implements OnInit {

  private id: number

  tour: Tour

  relatedLives: Event[] = []

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
      console.log(this.relatedLives)
    })
  }
}
