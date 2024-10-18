import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserInputDTO } from '../dtos/inputs/user-input.dto';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly baseUrl = environment.apiUrl;

  constructor(private httpclient: HttpClient) {}


  login(userInput: UserInputDTO) {
    return this.httpclient.post<any>(`${this.baseUrl}/Authentication/Login`, userInput)
      .pipe(
        map(response => {

          return response;
        })
      );
  }
  
}