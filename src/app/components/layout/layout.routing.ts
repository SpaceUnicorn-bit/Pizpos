import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NavbarComponent } from '../navbar/navbar.component';

export const LayoutRoutes: Routes = [  
    { path: 'dashboard', component: DashboardComponent },
];