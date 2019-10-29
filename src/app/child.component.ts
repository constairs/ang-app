import { Component } from '@angular/core';

@Component({
  selector: 'child-comp',
  template: `<h4>Kavo? {{ title }}</h4>`,
  styles: [`h2, p { color: red }`]
})
export class ChildComponent {
  title: 'Title';
}