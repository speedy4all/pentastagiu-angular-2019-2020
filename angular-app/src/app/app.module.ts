import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TodoShellModule } from './todo-shell/todo-shell.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // AboutComponent
  ],
  imports: [
    BrowserModule,
    TodoShellModule
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
