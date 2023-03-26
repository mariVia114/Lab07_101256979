import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(public elementRef: ElementRef) { }

  @HostListener('blur')
  onBlur(){
    this.elementRef.nativeElement.value = this.elementRef.nativeElement.value.toUpperCase();
  }
}
