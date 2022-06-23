import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './ui/layout/layout.component';
import { UseBackgroundDirective } from './use-background.directive';
import { UseLineAnimationDirective } from './use-line-animation.directive';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutComponent,
    UseBackgroundDirective,
    UseLineAnimationDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LayoutComponent, UseBackgroundDirective, UseLineAnimationDirective]
})
export class SharedModule { }
