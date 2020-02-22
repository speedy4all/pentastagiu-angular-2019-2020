import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { AboutRoutingModule } from './about-routing.module';
import { About1Component } from './about1/about1.component';
import { About2Component } from './about2/about2.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AboutComponent, About1Component, About2Component],
  imports: [
    CommonModule,
    AboutRoutingModule,
    HttpClientModule,
  ]
})
export class AboutModule { }
