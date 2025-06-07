import { Component } from '@angular/core';
import { Cliente } from '../../../models/cliente.interface';
import { ClienteService } from '../../../services/cliente.service';

@Component({
  selector: 'app-lista-clientes',
  imports: [],
  templateUrl: './lista-clientes.component.html',
  styleUrl: './lista-clientes.component.css'
})
export class ListaClientesComponent {

  data: Cliente[] = [];
  error: string | null = null;

  constructor(private clienteService: ClienteService){}

  ngOnInit():void{
    this.fetchClientes();
  }

  fetchClientes(): void{
    this.clienteService.getClientes().subscribe({
      next:(response)=>{
        this.data = response;
      },
      error: (err)=>{
        this.error = 'Error al cargar los datos: ' + err.message;
      }
        
    })
  }

}
