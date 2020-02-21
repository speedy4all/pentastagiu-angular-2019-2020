import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PhotosComponent } from './photos/photos.component';


const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'photos',
    component: PhotosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
