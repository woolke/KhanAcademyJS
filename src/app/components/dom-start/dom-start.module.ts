import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomStartComponent } from './dom-start.component';



@NgModule({
    declarations: [
        DomStartComponent
    ],
    exports: [
        DomStartComponent
    ],
    imports: [
        CommonModule
    ]
})
export class DomStartModule { }
