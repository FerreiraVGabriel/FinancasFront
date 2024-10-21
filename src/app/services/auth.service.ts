import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserInputDTO } from '../dtos/inputs/user-input.dto';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl = environment.apiUrl;
  private tokenKey = 'auth_token';

  constructor(private httpclient: HttpClient) {}


  login(userInput: UserInputDTO) {
    return this.httpclient.post<any>(`${this.baseUrl}/Authentication/Login`, userInput)
      .pipe(
        map(token => {
          localStorage.setItem(this.tokenKey, token);
          return true;
        })
      );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
  
  isAuthenticated(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    return !!token;
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}