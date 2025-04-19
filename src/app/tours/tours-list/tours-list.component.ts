import { Component, OnInit } from '@angular/core'
import { Album, Tour } from '../../../data'
import * as Fuse from 'fuse.js'
import { ToursService } from '../tours.service'
import { animate, style, transition, trigger } from '@angular/animations'
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
    'name',
    'kana'
  ]
}

@Component({
    selector: 'app-tours-list',
    templateUrl: './tours-list.component.html',
    styleUrls: ['./tours-list.component.sass'],
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
    ],
    standalone: false
})
export class ToursListComponent implements OnInit {

  tours: Tour[] = []

  private fuse: Fuse<any, any>
  query = ''

  inputFocused = false

  iconMag = faSearch

  constructor (
    private toursService: ToursService,
    private title: Title
  ) { }

  ngOnInit (): void {
    // 初期表示
    this.tours = this.getTours()
    this.fuse = new Fuse(this.tours, FUSE_OPTIONS) // "list" is the item array

    this.title.setTitle('Tours - PerfumeDB')
  }

  getTours (): Tour[] {
    return this.toursService.getTours()
  }

  queryChange () {
    if (this.query.length > 0) {
      this.tours = this.fuse.search<Tour, false, false>(this.query)
    } else {
      this.tours = this.getTours()
    }
  }
}
