import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { SPOTIFY_AUTH_CALLBACK_STATE, SPOTIFY_UUID_LS_KEY, SpotifyService } from '../../shared/spotify.service'

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.sass']
})
export class CallbackComponent implements OnInit, OnDestroy {

  private subscription = new Subscription()

  constructor (
    private ar: ActivatedRoute,
    private router: Router,
    private spotify: SpotifyService
  ) { }

  ngOnInit (): void {
    const spotifyStateKey = localStorage.getItem(SPOTIFY_UUID_LS_KEY) || ''
    this.ar.fragment.subscribe(async (s) => {
      const provider = this.ar.snapshot.paramMap.get('provider')
      if (provider !== 'spotify') return

      let foo = s.split('&')
      const params = foo.map(f => {
        const bar = f.split('=')
        return { key: bar[0], value: bar[1] }
      })

      const accessToken = params.find(b => b.key === 'access_token').value
      const state = params.find(b => b.key === 'state').value
      const restoreRoute = localStorage.getItem(SPOTIFY_AUTH_CALLBACK_STATE) || '/'
      if (state !== spotifyStateKey) {
        console.error('There was an error during the authentication')
        return
      }
      this.spotify.setAccessToken(accessToken)
      this.router.navigate([restoreRoute])
    })
  }

  ngOnDestroy () {
    this.subscription.unsubscribe()
  }

}
