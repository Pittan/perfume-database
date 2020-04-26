import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { EventsRoutingModule } from './events-routing.module'
import { EventsListComponent } from './events-list/events-list.component'
import { EventsDetailComponent } from './events-detail/events-detail.component'
import { FormsModule } from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { MatSnackBarModule } from '@angular/material/snack-bar'


@NgModule({
  declarations: [EventsListComponent, EventsDetailComponent],
  imports: [
    FormsModule,
    CommonModule,
    EventsRoutingModule,
    FontAwesomeModule,
    MatSnackBarModule
  ]
})
export class EventsModule { }
