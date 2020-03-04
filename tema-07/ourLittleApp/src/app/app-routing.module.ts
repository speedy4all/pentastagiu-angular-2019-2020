import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersModule } from './users/users.module';


const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    UsersModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
