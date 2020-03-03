import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {AlbumComponent} from './album/album.component';

const routes: Routes = [
  {
    path: 'user', component: UserComponent
  },
  {
    path: 'album', component: AlbumComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
