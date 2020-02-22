import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { About1Component } from './about1/about1.component';
import { About2Component } from './about2/about2.component';


const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    children: [
        {
            path: 'about1',
            component: About1Component
        },
        {
            path: ':id',
            component: About2Component
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
