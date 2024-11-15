import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon'; // Caso ainda não tenha

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    MatMenuModule,
    MatIconModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {}
