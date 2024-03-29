import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ToursRoutingModule } from './tours-routing.module'
import { ToursListComponent } from './tours-list/tours-list.component'
import { ToursDetailComponent } from './tours-detail/tours-detail.component'
import { FormsModule } from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'


@NgModule({
  declarations: [ToursListComponent, ToursDetailComponent],
  imports: [
    FormsModule,
    CommonModule,
    ToursRoutingModule,
    FontAwesomeModule
  ]
})
export class ToursModule { }
