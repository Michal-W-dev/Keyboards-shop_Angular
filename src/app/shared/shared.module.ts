import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './ui/layout/layout.component';
import { UseBackgroundDirective } from './use-background.directive';
import { UseLineAnimationDirective } from './use-line-animation.directive';
import { RouterModule } from '@angular/router';
import { RatingComponent } from './feature/rating/rating.component';



@NgModule({
  declarations: [
    LayoutComponent,
    UseBackgroundDirective,
    UseLineAnimationDirective,
    RatingComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LayoutComponent, UseBackgroundDirective, UseLineAnimationDirective, RatingComponent]
})
export class SharedModule { }
