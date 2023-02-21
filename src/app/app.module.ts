import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DomStartModule} from "./components/dom-start/dom-start.module";
import { ProcessingComponent } from './components/processing/processing.component';
import { AccessToDomComponent } from './components/access-to-dom/access-to-dom.component';

@NgModule({
  declarations: [
    AppComponent,
    ProcessingComponent,
    AccessToDomComponent
  ],
    imports: [
        BrowserModule,
        DomStartModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
