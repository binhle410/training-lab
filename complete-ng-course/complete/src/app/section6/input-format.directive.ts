import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  // If we name the input alias to be the same as the Directive's selector (appInputFormat) we can
  // constract to [appInputFormat]="'lowercase'" instead of appInputFormat [format]="'lowercase'"
  @Input('appInputFormat') format;

  @HostListener('focus') onFocus() {
    console.log('on Focus');
  }

  @HostListener('blur') onBlur() {
    console.log('on Blur');
    const value = this.el.nativeElement.value;
    if (this.format === 'lowercase') {
      this.el.nativeElement.value = value.toLowerCase();
    } else {
      this.el.nativeElement.value = value.toUpperCase();
    }
  }

  constructor(private el: ElementRef) {
  }

}
