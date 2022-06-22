import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './ui/layout/layout.component';
import { UseBackgroundDirective } from './use-background.directive';



@NgModule({
  declarations: [
    LayoutComponent,
    UseBackgroundDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [LayoutComponent, UseBackgroundDirective]
})
export class SharedModule { }
