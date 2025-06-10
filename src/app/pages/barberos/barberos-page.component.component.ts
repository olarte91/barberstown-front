import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { ListaBarberosComponent } from "../../components/lista-barberos/lista-barberos.component";
import { AgregarFormComponent } from "../../components/agregar-form/agregar-form.component";

@Component({
  selector: 'app-barberos-page.component',
  imports: [ ListaBarberosComponent, AgregarFormComponent],
  templateUrl: './barberos-page.component.html',
})
export class BarberosPageComponent {
  openModal: boolean = false;

  modal(){
    this.openModal = true;
  }
}

