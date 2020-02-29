import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SongsRoutingModule } from './songs-routing.module'
import { SongsListComponent } from './songs-list/songs-list.component'
import { SongsDetailComponent } from './songs-detail/songs-detail.component'
import { FormsModule } from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'


@NgModule({
  declarations: [SongsListComponent, SongsDetailComponent],
  imports: [
    FormsModule,
    CommonModule,
    SongsRoutingModule,
    FontAwesomeModule
  ]
})
export class SongsModule { }
