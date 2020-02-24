import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AlbumsListComponent } from './albums-list/albums-list.component'
import { AlbumsDetailComponent } from './albums-detail/albums-detail.component'

const routes: Routes = [
  {
    path: '',
    component: AlbumsListComponent
  },
  {
    path: ':id',
    component: AlbumsDetailComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }
