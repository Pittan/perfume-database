import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AlbumsRoutingModule } from './albums-routing.module'
import { AlbumsListComponent } from './albums-list/albums-list.component'
import { AlbumsDetailComponent } from './albums-detail/albums-detail.component'
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [AlbumsListComponent, AlbumsDetailComponent],
  imports: [
    FormsModule,
    CommonModule,
    AlbumsRoutingModule
  ]
})
export class AlbumsModule { }
