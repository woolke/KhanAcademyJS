import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access-to-dom-task',
  templateUrl: './access-to-dom-task.component.html',
  styleUrls: ['./access-to-dom-task.component.css']
})
export class AccessToDomTaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  this.changeDothDoes();
  }


  public changeDothDoes(){
    let dothEls = document.querySelectorAll("ul .doth");
    for (let i = 0; i < dothEls.length; i++) {
      dothEls[i].innerHTML="does";

    }
  }

}
