import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, shareReplay } from 'rxjs';
import { IProduct } from 'src/app/models/product.model';
import { ProductService } from 'src/app/product/data/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminProductsComponent {
  products$ = this.productService.getProducts().pipe(shareReplay())
  filteredProducts$?: Observable<IProduct[]>
  control = new FormControl('');

  constructor(private productService: ProductService) { }
}
