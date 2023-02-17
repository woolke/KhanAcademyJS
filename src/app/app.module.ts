import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DomStartModule} from "./components/dom-start/dom-start.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        DomStartModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
