import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormModule } from './login-form/login-form.module';
import { UserFormModule } from './user-form/user-form.module';
import { ThreeSpaceModule } from './three-space/three-space.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginFormModule,
    UserFormModule,
    ThreeSpaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
