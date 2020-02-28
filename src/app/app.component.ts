import { Component } from '@angular/core'
import { MenuService } from './shared/menu.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'perfume-database'

  constructor (
    public menu: MenuService
  ) {
  }
}
