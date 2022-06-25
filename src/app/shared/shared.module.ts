import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './ui/layout/layout.component';
import { UseBackgroundDirective } from './use-background.directive';
import { UseLineAnimationDirective } from './use-line-animation.directive';
import { RouterModule } from '@angular/router';
import { RatingComponent } from './feature/rating/rating.component';
import { ColComponent } from './ui/bs/col.component';
import { RowComponent } from './ui/bs/row.component';



@NgModule({
  declarations: [
    LayoutComponent,
    UseBackgroundDirective,
    UseLineAnimationDirective,
    RatingComponent,
    ColComponent,
    RowComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LayoutComponent, UseBackgroundDirective, UseLineAnimationDirective, RatingComponent, ColComponent, RowComponent]
})
export class SharedModule { }
