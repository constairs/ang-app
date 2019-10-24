import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `<label>Name: </label>
              <input [(ngModel)]="name" placeholder="name" />
              <h1>{{name}}</h1>
            `,
})
export class AppComponent {
  name = '';
}
