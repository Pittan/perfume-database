import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AuthRoutingModule } from './auth-routing.module'
import { CallbackComponent } from './callback/callback.component'
import { MatSnackBarModule } from '@angular/material/snack-bar'

@NgModule({
  declarations: [CallbackComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatSnackBarModule
  ]
})
export class AuthModule { }
