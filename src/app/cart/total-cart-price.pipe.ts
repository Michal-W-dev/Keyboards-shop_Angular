import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product.model';

@Pipe({ name: 'totalPrice' })
export class TotalCartPricePipe implements PipeTransform {
  transform(value: IProduct[]): string {
    return (!value.length) ? '0 zł' : value.reduce((acc, val) => val.qty! * val.price + acc, 0).toFixed(2) + ' zł';
  }
}
