import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ToursListComponent } from './tours-list/tours-list.component'
import { ToursDetailComponent } from './tours-detail/tours-detail.component'

const routes: Routes = [
  {
    path: '',
    component: ToursListComponent
  },
  {
    path: ':id',
    component: ToursDetailComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToursRoutingModule { }
