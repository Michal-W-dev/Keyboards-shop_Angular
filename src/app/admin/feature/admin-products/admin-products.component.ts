import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IProduct } from 'src/app/models/product.model';
import seedProducts from 'src/seed'

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent {
  products: IProduct[] = seedProducts;
  filteredProducts?: IProduct[];
  control = new FormControl();
}
