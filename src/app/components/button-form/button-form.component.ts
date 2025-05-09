import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button-form',
  imports: [],
  templateUrl: './button-form.component.html',
})
export class ButtonFormComponent {
  label = input('button');
 }
