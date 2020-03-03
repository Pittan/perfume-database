import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthComponent } from '../shared/auth/auth.component'
import { CallbackComponent } from './callback/callback.component'

const routes: Routes = [
  {
    path: 'callback/:provider',
    component: CallbackComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
