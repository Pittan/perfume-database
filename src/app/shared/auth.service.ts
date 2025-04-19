import { Injectable } from '@angular/core'
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog'
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
