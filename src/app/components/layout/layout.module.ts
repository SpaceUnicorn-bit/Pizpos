import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { LayoutRoutes} from './layout.routing';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LayoutComponent} from './layout.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    LayoutComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(LayoutRoutes),
    HttpClientModule
  ],
  exports: [
    HttpClientModule,
    RouterModule,
    SidebarComponent,
    LayoutComponent,
    NavbarComponent
  ]
})
export class LayoutModule { }
