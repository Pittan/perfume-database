import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Event, EVENTS, SetListItemDefinition, Song, SONGS } from '../../../data'
import { flatten } from 'lodash-es'

@Component({
  selector: 'app-songs-detail',
  templateUrl: './songs-detail.component.html',
  styleUrls: ['./songs-detail.component.sass']
})
export class SongsDetailComponent implements OnInit {

  private id: number

  song: Song

  relatedLives: Event[] = []

  constructor (
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit (): void {
    this.activeRoute.params.subscribe(params => {
      if (params['id']) {
        this.id = Number(params['id'])
      }
      this.song = SONGS.find(s => s.id === this.id)

      const events = [...EVENTS]
      this.relatedLives = events.filter(event => {
        const flattened = flatten(event.songs)
        return flattened.some(item => {
          if (isSetListItemDefinition(item)) {
            if (!item.songs) return false
            return item.songs.some(so => {
              return so === this.id
            })
          }
          return item === this.id
        })
      })
    })
  }
}

/**
 * User Defined Type Guard!
 */
function isSetListItemDefinition (arg: any): arg is SetListItemDefinition {
  return arg.songs !== undefined
}
