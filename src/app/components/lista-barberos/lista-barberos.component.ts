import { Component, OnInit } from '@angular/core';
import { Barbero } from '../../models/barbero.interface';
import { CommonModule } from '@angular/common';
import { BarberoService } from '../../services/barbero.service';
import { BarberoCardComponent } from "../barbero-card/barbero-card.component";

@Component({
  selector: 'app-lista-barberos',
  imports: [CommonModule, BarberoCardComponent],
  templateUrl: './lista-barberos.component.html'
})
export class ListaBarberosComponent implements OnInit{

  data :Barbero[] = [];
  error: string | null = null;

  constructor(private barberoService: BarberoService){}

  ngOnInit(): void {
      this.fetchBarbers();
  }

  fetchBarbers(): void{

    this.barberoService.getBarberos().subscribe({
      next: (response) => {
        this.data = response;
      },
      error: (err) =>{
        this.error = 'Error al cargar los datos: ' + err.message;
      }
    })
  }
 }
