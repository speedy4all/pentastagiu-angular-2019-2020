import { DetailsComponent } from './user-details/details/details.component';
import { UserDetailsModule } from './user-details/user-details.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'user',
    loadChildren: () => import('./user-details/user-details.module')
      .then( m => m.UserDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
