import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DomStartModule} from "./components/dom-start/dom-start.module";
import { ProcessingComponent } from './components/processing/processing.component';
import { AccessToDomComponent } from './components/access-to-dom/access-to-dom.component';
import { AccessToDomTaskComponent } from './components/access-to-dom/access-to-dom-task/access-to-dom-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ProcessingComponent,
    AccessToDomComponent,
    AccessToDomTaskComponent
  ],
    imports: [
        BrowserModule,
        DomStartModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
