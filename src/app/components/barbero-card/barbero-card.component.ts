import { Component, input } from '@angular/core';
import { Barbero } from '../../models/barbero.interface';

@Component({
  selector: 'app-barbero-card',
  imports: [],
  templateUrl: './barbero-card.component.html',
})
export class BarberoCardComponent {
// nombreBarbero = input('Nombre');
// apellidoBarbero = input('Apellido');
//   telefonoBarbero = input('Apellido');
//   correoBarbero = input('Apellido');
//   horaIngresoBarbero = input('Apellido');
//   horaSalidaBarbero = input('Apellido');

  barbero = input<Barbero>({
    id: 0,
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    imagen: ""
  })
}
