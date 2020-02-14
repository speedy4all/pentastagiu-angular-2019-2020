import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

import { AlbumModule } from './album/album.module';
import {UserDetailsModule} from './user-details/user-details.module';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    UserDetailsModule,
    AlbumModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
