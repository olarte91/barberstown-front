import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { AuthService } from '../services/auth-service';
import { Router, RouterLink } from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'login',
  imports: [ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CardModule,
    MessageModule, RouterLink],
  templateUrl: './login.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login implements OnInit {

  loginForm!: FormGroup;

  private authService = inject(AuthService);
  private router = inject(Router);

  constructor(private fb: FormBuilder, private messageService: MessageService) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  isInvalid(campo: string) {
    const control = this.loginForm.get(campo);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token);

          this.router.navigate(['/dashboard'])
        },
        error: (error: HttpErrorResponse) => {
            if(error.status === 0){
              this.messageService.add({
                severity: 'error',
                summary: 'Error de conexión',
                detail: 'No se pudo conectar con el servidor'
              })
            }
        }
      })
    }
  }


}


