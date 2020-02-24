import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'songs',
    loadChildren: () => import('./songs/songs.module').then(m => m.SongsModule)
  },
  {
    path: 'albums',
    loadChildren: () => import('./albums/albums.module').then(m => m.AlbumsModule)
  },
  {
    path: 'tours',
    loadChildren: () => import('./tours/tours.module').then(m => m.ToursModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then(m => m.EventsModule)
  },
  {
    path: '**',
    component: HomeComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
