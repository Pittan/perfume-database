import { Component, OnInit } from '@angular/core'
import { MenuService } from '../menu.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  constructor (
    public menu: MenuService
  ) { }

  ngOnInit (): void {
  }

  closeIfNeeded () {
    this.menu.closeMenuIfNeeded()
  }

  preventClick (ev: MouseEvent) {
    ev.preventDefault()
    ev.stopPropagation()
  }

}
