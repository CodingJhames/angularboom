
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3> Counter: {{ counter  }}</h3>

    <button (click)="increaseBy( 5 )">+1</button>
    <button (click)="decreaseBy( 5 )">-1</button>
    <button (click)="resetCounter()">Reset</button>
  `,

})

export class CounterComponent {
  constructor() { }

  public counter: number = 10;

  increaseBy( value:number ):void {
    this.counter += value;
  }

  decreaseBy( value:number ):void {
    this.counter -= value;
  }

  resetCounter( ){
    this.counter = 0;
  }


}


// import { Component } from "@angular/core";


// @Component({
//   selector: 'app-counter',
//   template: '<h1>Hola Counter</h1>'
// })
// export class CounterComponent {

// }
