import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShow]'
})
export class ShowDirective {

  constructor(private element: ElementRef, public renderer: Renderer2) {

    console.log();

  }
  @HostListener('mouseover')
  onmouseover() {
    const button = this.element.nativeElement.querySelector('.button-remove');
    // const span = this.element.nativeElement.querySelector('span');
    this.renderer.setStyle(button, 'display', 'inline-block');
    // this.renderer.setStyle(span, 'text-decoration', 'line-through');
  }

  @HostListener('mouseleave')
  onmouseleave() {
    const button = this.element.nativeElement.querySelector('.button-remove');
    // const span = this.element.nativeElement.querySelector('span');
    this.renderer.setStyle(button, 'display', 'none');
    // this.renderer.setStyle(span, 'text-decoration', 'none');
  }
}
