import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { EventsRoutingModule } from './events-routing.module'
import { EventsListComponent } from './events-list/events-list.component'
import { EventsDetailComponent } from './events-detail/events-detail.component'
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [EventsListComponent, EventsDetailComponent],
  imports: [
    FormsModule,
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
