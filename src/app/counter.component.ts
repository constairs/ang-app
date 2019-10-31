import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  template: `<p>{{ counter }}</p>`
})
export class CounterComponent {
  counter: number = 0;
  increment() { this.counter++; }
  decrement() { this.counter--; }
}