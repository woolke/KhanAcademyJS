import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-dom-event',
  templateUrl: './dom-event.component.html',
  styleUrls: ['./dom-event.component.css']
})
export class DomEventComponent implements OnInit {
  @ViewChild('face')
  face!: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  public onMouseMove(event: MouseEvent): void {
    console.log(event);
    this.beard(event);
  }

  public beard(event: MouseEvent): void {
    var beard = document.createElement("div");
    beard.className = "beard";
    document.body.appendChild(beard);
    beard.style.top = event.clientY + "px"
    beard.style.left = event.clientX + "px"
    beard.style.background="black";
    beard.style.width="5px";
    beard.style.height='5px';
    beard.style.position='absolute';
    beard.style.borderRadius='2px';
  }
}

