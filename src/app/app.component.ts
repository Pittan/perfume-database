import { Component, OnInit } from '@angular/core'
import { MenuService } from './shared/menu.service'
import { GoogleAnalyticsService } from './shared/google-analytics.service'
import { NavigationEnd, Router, RouterEvent } from '@angular/router'
import { filter } from 'rxjs/operators'
import * as SpotifyWebApi from 'spotify-web-api-js'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
    standalone: false
})
export class AppComponent implements OnInit {
  title = 'perfume-database'

  constructor (
    public menu: MenuService,
    private router: Router,
    private ga: GoogleAnalyticsService,
  ) {
  }

  ngOnInit () {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((params: RouterEvent) => {
        this.ga.sendPageView(params.url)
      })
  }
}
