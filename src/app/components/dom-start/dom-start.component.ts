import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dom-start',
  templateUrl: './dom-start.component.html',
  styleUrls: ['./dom-start.component.css']
})
export class DomStartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Wheeee!");
  }

}
