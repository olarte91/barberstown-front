import { Component } from '@angular/core';
import { ListaClientesComponent } from '../../components/lista-clientes/lista-clientes/lista-clientes.component';

@Component({
  selector: 'app-clientes-page',
  imports: [ListaClientesComponent],
  templateUrl: './clientes-page.component.html',
})
export class ClientesPageComponent { }
