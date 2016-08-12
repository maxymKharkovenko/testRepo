import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import {LoginComponent} from './directives/login/login'
import {TableComponent} from './directives/customTable/customTable'

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },

  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'home',
    redirectTo: '/dashboard',
    pathMatch: 'full'

  },{
    path: 'contact',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'about',
    component: TableComponent
  },
];
export const routing = RouterModule.forRoot(appRoutes);
