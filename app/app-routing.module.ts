import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersComponent } from './characters.component';
import { DashboardComponent } from './dashboard.component';
import { PageNotFoundComponent } from './page-not-found.component';

import {LoginComponent} from './directives/login/login'
import {TableComponent} from './directives/customTable/customTable'

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'characters', component: CharactersComponent, },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent},

  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [DashboardComponent, CharactersComponent, PageNotFoundComponent, LoginComponent, TableComponent];
