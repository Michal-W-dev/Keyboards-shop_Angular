import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../data/cart.service';
import { Location } from '@angular/common';
import { ProductService } from 'src/app/product/data/product.service';
import { map, shareReplay, Subscription, switchMap } from 'rxjs';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnDestroy {
  getProducts$ = this.productService.getProducts().pipe(shareReplay())
  cart$ = this.cartService.cart$;
  qty = +this.route.snapshot.queryParams['qty']
  sub: Subscription;

  constructor(private route: ActivatedRoute, public cartService: CartService, private router: Router, public location: Location, private productService: ProductService) {
    this.sub = this.route.params.pipe(switchMap(({ id }) => this.getProducts$.pipe(map(
      products => {
        const product = products.find(({ _id }) => _id === id) || null
        if (product) {
          // Not allow to request unexisting (product) or (qty) -----------
          const qty = (this.qty > product.countInStock) ? product.countInStock : this.qty
          cartService.update({ ...product, qty })
          this.router.navigateByUrl('/cart', { replaceUrl: true })
        }
      }
    )))).subscribe()
  }

  checkoutHandler = () => console.log('PROCEED TO CHECKOUT') //TODO

  trackByFn = (idx: number) => idx

  ngOnDestroy(): void { this.sub.unsubscribe() }
}
