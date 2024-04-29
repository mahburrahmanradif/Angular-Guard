import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    { 
        path: 'login', 
        component: LoginComponent, 
        data: { 
            title: 'Login',
            metaDescription: 'This is the login page for our application.',
            showInMenu: false
        } 
    },
    { 
        path: 'dashboard', 
        component: DashboardComponent, 
        canActivate: [authGuard], title: 'Common Dashboard',
        data: { 
            title: 'Dashboard',
            metaDescription: 'This is the dashboard of our application.',
            showInMenu: true 
        },
         
    },

    // Redirect any unknown routes to the LoginComponent
    { path: '', redirectTo: '/login', pathMatch: 'full' },

    // Handle any unmatched routes (optional, you may choose to handle 404s differently)
    { path: '**', redirectTo: '/login', pathMatch: 'full' }
];
