import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SharedModule } from './shared/shared.module'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { MatDialogModule } from '@angular/material/dialog'
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'
import { MatSnackBarModule } from '@angular/material/snack-bar'

@NgModule({ declarations: [
        AppComponent,
        HomeComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        FontAwesomeModule,
        MatDialogModule,
        MatSnackBarModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
