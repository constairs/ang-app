import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'input-field',
  template: `<input [ngModel]="textData" (ngModelChange)="onChange($event)" />`
})
export class InputComponent {
  @Input() textData: string;
  @Output() textDataChange = new EventEmitter<string>();
  onChange(model: string) {
    this.textData = model;
    this.textDataChange.emit(model);
  }
}