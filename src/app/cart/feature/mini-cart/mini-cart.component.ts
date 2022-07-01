import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';
import { CartService } from '../../data/cart.service';

@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MiniCartComponent {
  @Input() showCart = true;

  constructor(public cartService: CartService) {
  }

  totalPrice = (cart: IProduct[]) => (
    (!cart.length) ? '0 zł' : cart.reduce((acc, val) => val.qty! * val.price + acc, 0).toFixed(2) + ' zł'
  )
}
