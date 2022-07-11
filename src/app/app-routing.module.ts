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
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'cart', component: CartComponent, title: 'Cart' },
  { path: 'cart/:id', component: CartComponent, title: 'Cart' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'register', component: RegisterComponent, title: 'Register' },
  { path: 'product/:id', component: ProductComponent, title: 'Product' },
  { path: 'keyboards', component: KeyboardsComponent, title: 'Search' },
  { path: 'admin/products', component: AdminProductsComponent, title: 'Admin products' },
  { path: 'admin/profile', component: AdminProfileComponent, title: 'Admin profile' },
  { path: 'not-found', component: HomeComponent, title: 'Not Found' },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
