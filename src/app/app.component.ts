import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginService } from './services/login.service';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

   constructor(private loginService: LoginService){}

  ngOnInit(): void {
    this.loginService.teste().subscribe((response) => {
      var x = response;
    })
  }
  
   title = 'financas-front';
}
