import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CartService } from '../../data/cart.service';

@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MiniCartComponent {
  @Input() showCart = true;

  constructor(public cartService: CartService) { }
}
