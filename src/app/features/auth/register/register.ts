import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth-service';
import { Router, RouterLink } from '@angular/router';
import { Button } from "primeng/button";
import { PasswordModule } from 'primeng/password';
import { MessageModule } from "primeng/message";
import { Card } from "primeng/card";
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, Button, PasswordModule, MessageModule, Card, InputTextModule, RadioButtonModule, RouterLink],
  templateUrl: './register.html',
})
export class Register implements OnInit {
  registerForm!: FormGroup;
  private authService = inject(AuthService);
  private router = inject(Router);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      username: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', [Validators.required, Validators.min(10)]],
      userType: ['', Validators.required]
    })
  }

  isValid(field: string): boolean {
    const control = this.registerForm.get(field);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  onSubmit(){
    if(this.registerForm.valid){
      this.authService.register(this.registerForm.value).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token);

          this.router.navigate(['/dashboard']);
        }
      })
    }
  }

}
