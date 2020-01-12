import { Component } from '@angular/core';
import { FormControl} from '@angular/forms';

@Component({
  selector: 'app-three-space',
  templateUrl: './three-space.component.html',
  styleUrls: ['./three-space.component.css']
})
export class ThreeSpaceComponent {

  title = 'Add Space After Every 3 Characters';

  str = new FormControl('');

}
