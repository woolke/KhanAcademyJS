import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-dom-start',
  templateUrl: './dom-start.component.html',
  styleUrls: ['./dom-start.component.css']
})
export class DomStartComponent implements OnInit {
  @ViewChild('txt') txt!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log("Wheeee!");
  }
  public log(toLog:string):void{
    console.log(toLog);
  }
  public setText (toSet:string):void{
    this.txt.nativeElement.innerHTML= toSet;
  }

}
