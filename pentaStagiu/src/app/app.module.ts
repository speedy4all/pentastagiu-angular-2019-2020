import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { ChildModule } from './child/child.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChildModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
