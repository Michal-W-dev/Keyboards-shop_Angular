import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { pluck } from 'rxjs';
import { CartService } from 'src/app/cart/data/cart.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  showProducts = false;
  showMiniCart = false;
  cartItemsNum$ = this.cartService.cart$.pipe(pluck('cartItemsNum'))

  constructor(public router: Router, private cartService: CartService) { }

  handleSubmit = () => { }

  toggleShowProducts = () => this.showProducts = !this.showProducts
}
