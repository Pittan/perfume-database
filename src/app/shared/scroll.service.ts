import { Injectable } from '@angular/core'
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to'

export enum PAGES {
  'ALBUM_LIST',
  'ALBUM_DETAIL',
  'SONG_LIST',
  'SONG_DETAIL',
  'EVENT_LIST',
  'EVENT_DETAIL',
  'TOUR_LIST',
  'TOUR_DETAIL',
}

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private pos: number[] = []

  constructor (private _scrollToService: ScrollToService) { }

  setScrollPosition (key: PAGES, position: number = 0) {
    this.pos[key] = position
  }

  getScrollPosition (key: PAGES): number {
    return this.pos[key] || 0
  }

}
