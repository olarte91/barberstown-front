import { Component } from '@angular/core';
import { BarberoService } from '../../services/barbero.service';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Barbero } from '../../models/barbero.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-form',
  imports: [ReactiveFormsModule],
  templateUrl: './agregar-form.component.html',
})
export class AgregarFormComponent {
  barberoForm: FormGroup;

  constructor(private barberoService: BarberoService,
    private fb: FormBuilder
  ){
    this.barberoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      telefono: ['', [Validators.required, Validators.maxLength(10)]],
      correo: ['', [Validators.required, Validators.email]],
      imagen: ['', Validators.required]

    });
  }

  onSubmit(){
    if(this.barberoForm.valid){
      const barbero: Barbero = this.barberoForm.value;

      this.barberoService.createBarbero(barbero).subscribe({
        next:(response)=>{
          console.log('Barbero creado exitosamente: ', response);

          Swal.fire({
            title: '¡Guardado!',
            text: 'Barbero guardado exitosamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          });
          

          this.barberoForm.reset();
        },
        error: (error)=>{
          console.log('Error al crear barbero:', error);
        }
      });
    }else{
      console.log('Formulario inválido');
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched(){
    Object.keys(this.barberoForm.controls).forEach(key=>{
      const control = this.barberoForm.get(key);
      control?.markAsTouched();
    });
  }

  openModal(): boolean{
    return !true;
  }


 }
