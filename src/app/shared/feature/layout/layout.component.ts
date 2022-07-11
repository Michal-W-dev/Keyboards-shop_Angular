import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { map, of, pluck } from 'rxjs';
import { CartService } from 'src/app/cart/data/cart.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  // Mini cart props ---------
  showMiniCart = false;
  cartItemsNum$ = this.cartService.cart$.pipe(pluck('cartItemsNum'))

  // Search products ---------
  searchForm = new FormGroup({ search: new FormControl('') })
  showProducts = false;
  search$ = this.searchForm.valueChanges.pipe(map(({ search }) => search || ''))

  constructor(public router: Router, private cartService: CartService) { }

  hideSearch() {
    this.showProducts = false;
    this.searchForm.reset()
  }

  toggleShowProducts() {
    this.showProducts = !this.showProducts;
    this.searchForm.reset()
  }

  handleSubmit = () => {
    const search = this.searchForm.get('search')?.value
    this.router.navigateByUrl(`/keyboards?search=${search}`);
    this.searchForm.reset();
  }
}
