import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeworkComponent} from './homework/homework.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeworkComponent
  },
  {
    path: 'user',
    loadChildren: () => import('./user/users.module').then(m => m.UsersModule),
    outlet: 'user'
  },
  {
    path: 'photo',
    loadChildren: () => import('./photo/photos.module').then(m => m.PhotosModule),
    outlet: 'photo'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Homework7RoutingModule {
}
