import { Component } from '@angular/core';
import { NgModule } from '@angular/core';


import { CharacterService } from './character.service';
import {HeaderComponent} from './directives/customHeader/customHeader'

@Component({
  selector: 'my-app',
  template: `
    <a [routerLink]="['/dashboard']">Dashboard</a>
    <a [routerLink]="['/characters']">Characters</a>
    <main-header></main-header>
    <router-outlet></router-outlet>
    `
})

export class AppComponent { }
