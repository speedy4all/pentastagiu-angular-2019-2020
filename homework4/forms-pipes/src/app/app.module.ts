import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SpacePipe } from './space.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    ReactiveFormComponent,
    SpacePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
