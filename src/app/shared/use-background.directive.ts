import { Directive, HostBinding, Input, OnInit } from '@angular/core';
import generateBackground from './utils/generateBackground'

/**  
 * Generate dark background with light stripes
 * @prop stripesNum - number of stripes
 * @prop topSatur - top saturation (light stripes)
 * @prop lowSatur - low saturation (dark stripes)
 * */

@Directive({ selector: '[useBackground]' })
export class UseBackgroundDirective implements OnInit {
  @Input() stripesNum = 6
  private topSatur = 20
  private lowSatur = 12
  @HostBinding('style.backgroundImage') bg = '';

  ngOnInit(): void { this.bg = generateBackground(this.stripesNum, this.topSatur, this.lowSatur) }
}
