import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductsComponent } from './admin/feature/admin-products/admin-products.component';
import { AdminProfileComponent } from './admin/feature/admin-profile/admin-profile.component';
import { LoginComponent } from './auth/feature/login/login.component';
import { RegisterComponent } from './auth/feature/register/register.component';
import { CartComponent } from './cart/feature/cart.component';
import { HomeComponent } from './home/feature/home.component';
import { KeyboardsComponent } from './keyboards/keyboards.component';
import { ProductComponent } from './product/feature/product.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'cart/:id', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: HomeComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'keyboards', component: KeyboardsComponent },
  { path: 'admin/products', component: AdminProductsComponent },
  { path: 'admin/profile', component: AdminProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
