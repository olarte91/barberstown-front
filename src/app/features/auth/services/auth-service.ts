import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { loginRequest } from '../models/login-request';
import { LoginResponse } from '../models/login-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor() { }

  login(credentials: loginRequest): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials);
  }

}
