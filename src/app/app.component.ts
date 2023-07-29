import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  total = 0;
  field1 = 0;
  field2 = 0;
  operation = '+';
  
  constructor() {}

  calculate () {
    switch(this.operation) {

      case "+":
      this.total = +this.field1 + +this.field2;
      break;

      case "-":
      this.total = +this.field1 - +this.field2;
      break;

      case "*":
      this.total = +this.field1 * +this.field2;
      break;

      case "/":
      this.total = +this.field1 / +this.field2;
      break;

      default:
        this.total = 0;
        break;

    }
  }
}
