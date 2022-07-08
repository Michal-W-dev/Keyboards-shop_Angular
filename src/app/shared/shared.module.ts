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
import { MiniCartComponent } from '../cart/feature/mini-cart/mini-cart.component';
import { TotalCartPricePipe } from '../cart/total-cart-price.pipe';
import { ShowMiniCartDirective } from './show-mini-cart.directive';
import { SearchComponent } from './feature/search/search.component';
import { LoaderComponent } from './feature/loader/loader.component';



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
    FormGroupComponent,
    MiniCartComponent,
    TotalCartPricePipe,
    ShowMiniCartDirective,
    SearchComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    LayoutComponent, UseBackgroundDirective, UseLineAnimationDirective, RatingComponent, ColComponent,
    RowComponent, PopoverComponent, MessageComponent, FormGroupComponent, MiniCartComponent, TotalCartPricePipe,
    LoaderComponent
  ]
})
export class SharedModule { }
