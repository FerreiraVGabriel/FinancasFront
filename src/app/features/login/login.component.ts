import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserInputDTO } from '../../dtos/inputs/user-input.dto';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  submitted = false;

  constructor(private fb: FormBuilder,
              private loginService: LoginService
) {}

  protected form = this.fb.group({
    email: ['', Validators.required],
    password: [null, Validators.required],
  });

  onSubmit(): void {
    this.submitted = true;

    if (this.form.valid) {
      const email = this.form.value.email || ''; // Garantir que seja uma string
      const password = this.form.value.password || ''; // Garantir que seja uma string
      const userInput = new UserInputDTO(email, password);
      this.loginService.login(userInput).subscribe(response => {
        console.log('Login successful', response);
        // Faça o tratamento da resposta, como redirecionar ou salvar o token
      });
    }
  }

}
