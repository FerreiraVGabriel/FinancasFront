import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient: HttpClient) {}

  private readonly baseUrl = 'https://localhost:44312/api/User';

  teste() {
    return this.httpclient.get<any>(this.baseUrl)
      .pipe(
        map(response => {
          var x = response
        })
      );
    }
  
}