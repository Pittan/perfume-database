import { Component, OnInit } from '@angular/core'
import { MenuService } from '../menu.service'
import { faBars } from '@fortawesome/free-solid-svg-icons'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.sass'],
    standalone: false
})
export class HeaderComponent implements OnInit {

  hamburger = faBars

  constructor (
    public menu: MenuService
  ) { }

  ngOnInit (): void {
  }

  toggle () {
    this.menu.toggleMenu()
  }

}
