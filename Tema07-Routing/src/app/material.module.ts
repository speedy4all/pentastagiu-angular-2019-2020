import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatListModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatListModule
  ],
  exports: [
    MatCardModule,
    MatListModule
  ]
})

export class MaterialModule {}
