import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DomStartModule} from "./components/dom-start/dom-start.module";
import { ProcessingComponent } from './components/processing/processing.component';
import { AccessToDomComponent } from './components/access-to-dom/access-to-dom.component';
import { AccessToDomTaskComponent } from './components/access-to-dom/access-to-dom-task/access-to-dom-task.component';
import { DomEventComponent } from './components/dom-event/dom-event.component';
import { FormsComponent } from './components/forms/forms.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ProcessingComponent,
    AccessToDomComponent,
    AccessToDomTaskComponent,
    DomEventComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    DomStartModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
