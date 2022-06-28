import { Component } from '@angular/core';
import { CartService } from './cart/data/cart.service';
import { IProduct } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private cartService: CartService) {
    const storageData = localStorage.getItem('_cart') || ''
    if (storageData) cartService.emitCartChanges(JSON.parse(storageData) as IProduct[])
  }
}
