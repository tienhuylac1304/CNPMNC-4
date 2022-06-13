import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs: 'appDropdown',
})
export class DropdownDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;

    let dropdownMenu =
      this.el.nativeElement.parentElement.querySelector('.dropdown-menu');
    // this.el.nativeElement.querySelector('.dropdown-menu');

    if (this.isOpen) {
      this.renderer.addClass(dropdownMenu, 'show');
    } else {
      this.renderer.removeClass(dropdownMenu, 'show');
    }
  }
}
