import { Directive, HostListener } from '@angular/core';
import { LayoutComponent } from './feature/layout/layout.component';

@Directive({
  selector: '[showMiniCart]'
})
export class ShowMiniCartDirective {
  constructor(private host: LayoutComponent) { }

  @HostListener('mouseenter') onMouseEnter = () => this.host.showMiniCart = true
  @HostListener('mouseleave') onMouseLeave = () => this.host.showMiniCart = false
}
