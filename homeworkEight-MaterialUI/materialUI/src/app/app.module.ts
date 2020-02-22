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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card'; 
import {MatTooltipModule} from '@angular/material/tooltip'; 
import { PhotoserviceService } from './photoservice.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PhotosComponent,
    UnicknamesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTooltipModule,
    
  ],
  providers: [PeopleService, PhotoserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
