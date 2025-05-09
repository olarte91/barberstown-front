import { Component, input } from '@angular/core';

@Component({
  selector: 'app-input-form',
  imports: [],
  templateUrl: './input-form.component.html',
})

export class InputFormComponent {
  inputType = input('');
  placeHolder = input('');
}


