import { Component, OnInit } from '@angular/core'
import { MenuService } from '../menu.service'
import {SettingsService} from "../settings.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.sass'],
    standalone: false
})
export class NavComponent implements OnInit {

  allowSpoiler = false

  private subscription = new Subscription();

  constructor (
    public menu: MenuService,
    public settings: SettingsService
  ) { }

  ngOnInit (): void {
    this.subscription.add(this.settings.allowSpoiler.subscribe(val => {
      this.allowSpoiler = val
    }))
  }

  closeIfNeeded () {
    this.menu.closeMenuIfNeeded()
  }

  allowSpoilerChanged (val: boolean) {
    this.settings.allowSpoiler.next(val)
  }

  preventSliderClick (ev: MouseEvent) {
    ev.stopPropagation()
  }

  preventClick (ev: MouseEvent) {
    ev.preventDefault()
    ev.stopPropagation()
  }

}
