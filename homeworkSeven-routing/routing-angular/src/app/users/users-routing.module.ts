import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UnicknamesComponent } from './unicknames/unicknames.component';


const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    children: [ 
        { path: 'unicknames', component: UnicknamesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
