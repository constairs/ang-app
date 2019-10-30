import { Component, Input } from '@angular/core';

@Component({
  selector: 'child-comp',
  template: `<h4>Kavo? {{ title }}. {{ userAge }}</h4><span *ngIf="isUnknown">meh</span>`,
  styles: [`h2, p { color: red }`]
})
export class ChildComponent {
  @Input() title: string;
  @Input() isUnknown:boolean;
  _userAge: number;

  @Input()
  set userAge(age: number) {
    if(age < 0) {
      this._userAge = 0;
    } else if (age > 100) {
      this._userAge = 100;
    } else {
      this._userAge = age;
    }
  }
  get userAge() {
    return this._userAge;
  }
}