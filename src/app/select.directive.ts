import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSelect]'
})
export class SelectDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }


}
