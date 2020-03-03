import { Component, OnInit } from '@angular/core'
import { SPOTIFY_AUTH_CALLBACK_STATE, SpotifyService } from '../spotify.service'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {

  constructor (
    private spotify: SpotifyService
  ) { }

  ngOnInit (): void {}

  authWithSpotify () {
    localStorage.setItem(SPOTIFY_AUTH_CALLBACK_STATE, location.pathname)
    location.href = this.spotify.getAuthUrl()
  }
}
