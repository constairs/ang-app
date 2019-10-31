import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'content-child',
  template: `<ng-content></ng-content>
             <button (click)="change()">Change</button>`
})
export class ContentChildComponent {
  @ContentChild('headerContent', { static: false })
  header: ElementRef;

  change() {
    console.log(this.header);
    this.header.nativeElement.textContent = 'meeeeh';
  }
}