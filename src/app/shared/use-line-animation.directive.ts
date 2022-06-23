import { ChangeDetectorRef, Directive, ElementRef, HostListener, NgZone, Renderer2 } from '@angular/core';

/**
 * Line animation on navbar, which follow hovered nav-links. Instance props:
 * @prop left - left pxs from hovered nav-link (div.underline styles)
 * @prop width - width of hovered nav-link  (div.underline styles)
 * @prop animationClass - change classes on hover (div.underline class). Class indicate which state of animation is on.
 * @prop prevElement - e.target hovered. Change class properties only if previously selected Element is different.
 */

@Directive({
  selector: '[useLineAnimation]',
  exportAs: 'useLineDirective'
})
export class UseLineAnimationDirective {
  position = { left: '0px', width: '46px' }
  animationClass = ''
  prevElement: EventTarget | null = null;

  constructor(private zone: NgZone, private renderer: Renderer2, private elRef: ElementRef, private cd: ChangeDetectorRef) {
    zone.runOutsideAngular(() => {
      renderer.listen(elRef.nativeElement, "mousemove", this.handleMouseMove);
      renderer.listen(window, "resize", this.disableOnResize);
    });
  }

  @HostListener('mouseleave') handleMouseOut = () => this.animationClass = 'lineDisappear';

  handleMouseMove = (e: MouseEvent) => {
    e.stopPropagation();
    let { className, offsetLeft, offsetWidth } = e.target as HTMLElement;

    if (className.includes('follow') && this.prevElement !== e.target) {
      // Remove change detection on mobile (on full screen, btns cannot be wider than 140px, the widest yet 97px)
      if (parseInt(this.position.width) < 140) {
        this.position = { left: offsetLeft + 'px', width: offsetWidth + 'px' }
        this.animationClass = 'lineAppear';
        this.prevElement = e.target
        this.cd.detectChanges()
      }
    }
  }

  // Move line outside of the screen. Start animation from the left.
  removeLineAnimation = () => { this.position.left = '-109px'; this.position.width = '0px' }

  disableOnResize = (e: Event) => {
    if (this.position.width !== '0px') {
      this.removeLineAnimation();
      this.prevElement = e.target;
      this.cd.detectChanges();
    }
  }
}
