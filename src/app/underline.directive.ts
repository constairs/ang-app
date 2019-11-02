import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[underline]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
  }
})
export class UnderlineDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer');
  }

  onMouseEnter() {
    this.setTextDecoration('underline');
  }

  onMouseLeave() {
    this.setTextDecoration('none');
  }

  private setTextDecoration(val: string) {
    this.renderer.setStyle(this.element.nativeElement, 'text-decoration', val);
  }
}