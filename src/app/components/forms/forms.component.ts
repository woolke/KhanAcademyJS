import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  @ViewChild('f', {static: false})
  carForm: NgForm | undefined;

  title: string;

  constructor() {
    this.title = "Wygląda na to, że wszystko działa jak należy!"
  }

  onSubmit() {
    console.log("Marka samochodu: " + this.carForm?.value.carBrand);
    console.log("Opis samochodu: " + this.carForm?.value.carDescription);
    console.log("Wielkość zamówienia: " + this.carForm?.value.carAmount);

  }

  onClear() {
    this.carForm?.reset();
  }

  ngOnInit() {
  }
}
