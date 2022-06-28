import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/product.model';
import { CartService } from '../data/cart.service';
import productsSeed from 'src/seed'


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {
  cart$ = this.cartService.cart$;

  // Starting values from params ---------------
  private id = this.route.snapshot.params['id']
  private product: IProduct | null = productsSeed.find(({ _id }) => _id === this.id) || null;
  qty = +this.route.snapshot.queryParams['qty']

  constructor(private route: ActivatedRoute, public cartService: CartService, private router: Router) {
    // Not allow to request unexisting (product) or (qty) -----------
    if (this.product) {
      const qty = (this.qty > this.product.countInStock) ? this.product.countInStock : this.qty
      cartService.update({ ...this.product, qty })
      this.router.navigateByUrl('/cart')
    }
  }

  totalPrice = (cart: IProduct[]) => (
    (!cart.length) ? '0 zł' : cart.reduce((acc, val) => val.qty! * val.price + acc, 0).toFixed(2) + ' zł'
  )

  checkoutHandler = () => console.log('PROCEED TO CHECKOUT') //TODO

  trackByFn = (idx: number) => idx
}
