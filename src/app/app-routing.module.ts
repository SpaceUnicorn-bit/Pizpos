import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components//dashboard/dashboard.component';
import { LayoutComponent } from '../app/components/layout/layout.component';
import { LoginComponent } from './components//login/login.component';
import { CheckLoginGuard } from './guards/check-login.guard';


const routes: Routes = [
  { path: '', component: LayoutComponent, canActivate: [CheckLoginGuard],
  children: [
    { 
      path: '',
      loadChildren: () => import('./components/layout/layout.module').
      then(m => m.LayoutModule)
    }
  ]},
  { path: 'Login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
