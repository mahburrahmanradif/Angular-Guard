import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './guard/auth.guard';
import { ChildComponent } from './child/child.component';
import { childGuard } from './guard/child.guard';
import { DeactivateComponent } from './deactivate/deactivate.component';

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
    // { 
    //     path: 'dashboard', 
    //     component: DashboardComponent, 
    //     canActivate: [authGuard],data: { 
    //         title: 'Dashboard',
    //         metaDescription: 'This is the dashboard of our application.',
    //         showInMenu: true },
    //     children: [
    //         { 
    //             path: 'child', 
    //             component: ChildComponent,
    //             canActivateChild: [childGuard] // Apply child guard
    //         }
    //     ]
    // },

    {
        path: 'dashboard',
        children: [
            {path: '', component: DashboardComponent, canActivate: [authGuard]},
            {path: 'deactivate', component: DeactivateComponent, canActivate: [authGuard]},
            {
                path: '',  canActivateChild: [childGuard],
                children: [
                    {path: 'child', component: ChildComponent, canDeactivate: [(component: ChildComponent)=>{component.canExit();}]}
                ]
            }
        ]
    },

    // Redirect any unknown routes to the LoginComponent
    { path: '', redirectTo: '/login', pathMatch: 'full' },

    // Handle any unmatched routes (optional, you may choose to handle 404s differently)
    { path: '**', redirectTo: '/login', pathMatch: 'full' }
];
