import { Component } from '@angular/core';
import { LabelFormComponent } from "../label-form/label-form.component";
import { InputFormComponent } from "../input-form/input-form.component";
import { ButtonFormComponent } from "../button-form/button-form.component";

@Component({
  selector: 'app-agregar-form',
  imports: [LabelFormComponent, InputFormComponent, ButtonFormComponent],
  templateUrl: './agregar-form.component.html',
})
export class AgregarFormComponent {
 }
