import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[roseBackground]'
})
export class RoseBackgroundDirective {

  constructor(private elementRef: ElementRef) {
    console.log(this.elementRef);
    this.elementRef.nativeElement.style.backgroundColor = '#f6f1f3';
    this.elementRef.nativeElement.style.color = 'black';
  }
}
