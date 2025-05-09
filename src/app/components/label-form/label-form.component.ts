import { Component, input } from '@angular/core';

@Component({
  selector: 'app-label-form',
  imports: [],
  templateUrl: './label-form.component.html',
})
export class LabelFormComponent {
  forLabel = input('');

}
