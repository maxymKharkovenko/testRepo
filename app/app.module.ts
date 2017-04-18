import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

import { AppComponent }   from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { CharacterService } from './character.service'

import {HeaderComponent} from './directives/customHeader/customHeader'
import {SecurityService} from './services/securitySvc';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AgmCoreModule.forRoot()
  ],
  declarations: [AppComponent, routedComponents, HeaderComponent],
  providers: [CharacterService, SecurityService],
  bootstrap: [AppComponent],
})
export class AppModule { }
