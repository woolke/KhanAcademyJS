import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-access-to-dom',
  templateUrl: './access-to-dom.component.html',
  styleUrls: ['./access-to-dom.component.css']
})
export class AccessToDomComponent implements OnInit, AfterViewInit {
  @ViewChild('heading') txt!: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
   // this.changeHeadingToCats();
    //this.changeSpansToCats();
  }
  public onHeadingClick():void {
    this.changeHeadingToCats();
    this.changeSpansToCats();
  }

  private changeSpansToCats() {
    let animalClassElements = document.querySelectorAll('.animal');
    console.log(animalClassElements)
    for (let i = 0; i < animalClassElements.length; i++) {
      animalClassElements[i].innerHTML = 'cat'
    }
  }

  private changeHeadingToCats(): void {
    if (this.txt) {
      this.txt.nativeElement.innerHTML = "All about cats";
    }
  }



  //todo https://fsgeek.pl/post/angular-cykl-zycia-komponentu/
}
