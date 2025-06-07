import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl = 'http://localhost:9090/api/clientes';

  constructor(private httpClient: HttpClient) { }

  getClientes(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(this.apiUrl);
  }
}
