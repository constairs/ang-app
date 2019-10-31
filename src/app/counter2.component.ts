import { Component } from '@angular/core';

@Component({
  selector: 'counter-comp',
  template: `<p>{{ counter }}</p>`
})
export class CounterComponent2 {
  counter: number = 0;
  increment() { this.counter++; }
  decrement() { this.counter--; }
}