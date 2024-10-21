import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
];
