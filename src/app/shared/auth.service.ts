import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { AuthComponent } from './auth/auth.component'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor (
    private matDialog: MatDialog
  ) { }

  open () {
    this.matDialog.open(AuthComponent)
  }
}
