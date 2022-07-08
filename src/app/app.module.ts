import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/feature/home.component';
import { CarouselComponent } from './home/ui/carousel/carousel.component';
import { ProductCardComponent } from './home/feature/product-card/product-card.component';
import { ProductComponent } from './product/feature/product.component';
import { ProductModalComponent } from './product/feature/product-modal/product-modal.component';
import { ProductReviewComponent } from './product/feature/product-review/product-review.component';
import { CartComponent } from './cart/feature/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/feature/login/login.component';
import { RegisterComponent } from './auth/feature/register/register.component';
import { KeyboardsComponent } from './keyboards/keyboards.component';
import { OptionDirective } from './keyboards/option.directive';
import { AdminProductsComponent } from './admin/feature/admin-products/admin-products.component';
import { FilterProductsPipe } from './admin/filter-products.pipe';
import { SelectPageComponent } from './admin/feature/select-page/select-page.component';
import { AdminProfileComponent } from './admin/feature/admin-profile/admin-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    ProductCardComponent,
    ProductComponent,
    ProductModalComponent,
    ProductReviewComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    KeyboardsComponent,
    OptionDirective,
    AdminProductsComponent,
    FilterProductsPipe,
    SelectPageComponent,
    AdminProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
