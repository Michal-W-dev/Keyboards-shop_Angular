import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { IProduct } from 'src/app/models/product.model';
import { ProductService } from '../data/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  imageIdx = 0;
  qty = 1;
  error$ = this.productService.error$
  product$ = this.route.params.pipe(switchMap(({ id }) => this.getProduct(id)))

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  handleAddToCart = (id: string) => this.router.navigateByUrl(`/cart/${id}?qty=${this.qty}`)

  numReviews = (product: IProduct) => product.numReviews === 1 ? '1 review' : `${product.numReviews} reviews`
  qtyArray(product: IProduct) { return [...Array(product.countInStock > 10 ? 10 : product.countInStock)] }
  getProduct = (id: string) => this.productService.getProduct(id)
}
