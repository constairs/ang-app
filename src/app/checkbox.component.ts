import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'checkbox',
  template:  `<div class="checkbox">
                <label [for]="id"></label>
                <input
                  type="checkbox"
                  [id]="id"
                  [value]="checked"
                  (change)="change(!checked)"
                />
              </div>`,
  styles: [],
})
export class CheckboxComponent {
  @Input()  id:string;
  @Input() checked:boolean;

  @Output() onChange = new EventEmitter<boolean>();
  change(checked: boolean) {
    this.onChange.emit(checked);
  }
}