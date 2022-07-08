import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductService } from 'src/app/product/data/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  products$ = this.productService.getProducts()
  error$ = this.productService.error$

  constructor(private productService: ProductService) { }
}
