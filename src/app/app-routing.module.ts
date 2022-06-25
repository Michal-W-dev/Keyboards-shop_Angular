import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/feature/home.component';
import { ProductComponent } from './product/feature/product.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: HomeComponent },
  { path: 'cart/:id', component: HomeComponent },
  { path: 'login', component: HomeComponent },
  { path: 'admin', component: HomeComponent },
  { path: 'product/:id', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
