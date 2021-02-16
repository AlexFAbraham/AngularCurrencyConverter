import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCurrencyConverter';
  clickCounter = 0;

  

  incrementCounterUp(){
    this.clickCounter++;
    if (this.clickCounter <= -1) {
      this.clickCounter = 0;
    }
  }
  incrementCounterDown(){
    this.clickCounter--;
    if (this.clickCounter <= -1) {
      this.clickCounter = 0;
  }
  
}

}
