import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersModule } from './users/users.module';
import { PhotosModule } from './photos/photos.module';


const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'photos',
    loadChildren: () => import('./photos/photos.module').then(m => m.PhotosModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    UsersModule,
    PhotosModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
