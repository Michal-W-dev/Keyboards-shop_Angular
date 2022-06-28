import { Injectable } from '@angular/core';
import { NgModel } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from 'src/app/models/product.model';


@Injectable({ providedIn: 'root' })
export class CartService {
  private cartChanged = new BehaviorSubject<{ cart: IProduct[], cartItemsNum: number }>({ cart: [], cartItemsNum: 0 });
  cart$ = this.cartChanged.asObservable()

  update(newItem: IProduct) {
    const cart = this.cartChanged.value.cart
    let updatedCart: IProduct[];
    const existItem = cart.find(({ _id }) => _id === newItem._id)

    if (existItem) updatedCart = cart.map(item => item._id === newItem._id ? newItem : item)
    else updatedCart = [...cart, newItem]
    this.emitCartChanges(updatedCart)
  }

  delete(removedProductID: string) {
    const updatedCart = this.cartChanged.value.cart.filter(item => item._id !== removedProductID)
    this.emitCartChanges(updatedCart)
  }

  changeQty(ngModel: NgModel, product: IProduct, qtyChange?: number) {
    let qty = (!ngModel.value) ? 0 : Number(product.qty)

    // Decide whether assign value from (buttons) or (input)
    qty = (qty >= 0 && qtyChange) ? qty + qtyChange : Number(ngModel.value)

    // Quantity (from 0 to countInStock)
    qty = (qty < 0) ? 0 : (qty > product.countInStock) ? product.countInStock : qty
    ngModel.control.setValue(qty || '')
    if (qty > 0) this.update({ ...product, qty })
  }

  emitCartChanges(cart: IProduct[]) {
    const cartItemsNum = cart.reduce((acc, val) => acc + val.qty!, 0)
    this.cartChanged.next({ cart, cartItemsNum });
    localStorage.setItem('_cart', JSON.stringify(cart))
  }
}
