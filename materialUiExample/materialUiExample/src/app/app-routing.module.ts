import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersModule} from './users/users.module';
import {UserV2Module} from './user-v2/user-v2.module';


const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'userV2',
    loadChildren: () => import('./user-v2/user-v2.module').then(m => m.UserV2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    UsersModule,
    UserV2Module],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
