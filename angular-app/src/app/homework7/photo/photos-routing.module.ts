import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PhotoComponent} from './photo/photo.component';
import {PhotoDetailsComponent} from './photo-details/photo-details.component';


const routes: Routes = [
  {
    path: 'photo',
    component: PhotoComponent,
    children: [
      {
        path: 'photo-details/:id',
        component: PhotoDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule {
}
