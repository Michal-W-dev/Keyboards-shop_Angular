import { Directive, HostBinding, Input, OnInit } from '@angular/core';
import generateBackground from './utils/generateBackground'

@Directive({
  selector: '[useBackground]'
})
export class UseBackgroundDirective implements OnInit {
  @Input() stripesNum = 6
  topSatur = 20
  lowSatur = 12
  @HostBinding('style.backgroundImage') bg = '';

  ngOnInit(): void {
    this.bg = generateBackground(this.stripesNum, this.topSatur, this.lowSatur)
  }
}
