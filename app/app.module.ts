import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

import { AppComponent }   from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { CharacterService } from './character.service'

import {HeaderComponent} from './directives/customHeader/customHeader'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent, routedComponents, HeaderComponent],
  providers: [CharacterService],
  bootstrap: [AppComponent],
})
export class AppModule { }
