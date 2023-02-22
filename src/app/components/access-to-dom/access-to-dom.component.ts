import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-access-to-dom',
  templateUrl: './access-to-dom.component.html',
  styleUrls: ['./access-to-dom.component.css']
})
export class AccessToDomComponent implements OnInit, AfterViewInit {

  @ViewChild('heading')
  txt!: ElementRef;

  public animalClassElements: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    this.addAnimalClassObjectsToArray();
  }

  public onHeadingClick(): void {
    this.changeHeadingToCats();
    this.changeSpansToCats();
  }

  public logAnimalClassElements(): void {
    for (let animalClassElement of this.animalClassElements) {
      console.log(animalClassElement);
    }
    console.log("W tablicy jest" + this.animalClassElements.length + "elementów")
  }

  private changeSpansToCats() {
    for (let i = 0; i < this.animalClassElements.length; i++) {
      this.animalClassElements[i].innerHTML = "<strong>cat</strong>";
      this.animalClassElements[i].className += " cat-color";
    }
  }

  private addAnimalClassObjectsToArray() {
    let animalClassElements = document.querySelectorAll('.animal');
    for (let i = 0; i < animalClassElements.length; i++) {
      this.animalClassElements.push(animalClassElements[i]);
    }
  }

  private changeHeadingToCats(): void {
    if (this.txt) {
      this.txt.nativeElement.innerHTML = "All about cats";
      this.txt.nativeElement.className="cat-color";
      this.txt.nativeElement.style.textAlign = "center";
    }
  }


  //todo https://fsgeek.pl/post/angular-cykl-zycia-komponentu/
}
