import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { PhotosComponent } from './photos/photos.component';
import { UnicknamesComponent } from './users/unicknames/unicknames.component';
import { UsersRoutingModule } from './users/users-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { PeopleService} from './people.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PhotosComponent,
    UnicknamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersRoutingModule,
    HttpClientModule,
    
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
