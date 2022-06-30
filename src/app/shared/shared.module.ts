import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './feature/layout/layout.component';
import { UseBackgroundDirective } from './use-background.directive';
import { UseLineAnimationDirective } from './use-line-animation.directive';
import { RouterModule } from '@angular/router';
import { RatingComponent } from './feature/rating/rating.component';
import { ColComponent } from './ui/bs/col.component';
import { RowComponent } from './ui/bs/row.component';
import { PopoverComponent } from './feature/popover/popover.component';
import { MessageComponent } from './feature/message/message.component';
import { FormGroupComponent } from './feature/form-group/form-group.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LayoutComponent,
    UseBackgroundDirective,
    UseLineAnimationDirective,
    RatingComponent,
    ColComponent,
    RowComponent,
    PopoverComponent,
    MessageComponent,
    FormGroupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [LayoutComponent, UseBackgroundDirective, UseLineAnimationDirective, RatingComponent, ColComponent, RowComponent, PopoverComponent, MessageComponent, FormGroupComponent]
})
export class SharedModule { }
