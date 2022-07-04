import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IProduct } from '../models/product.model';

@Directive({ selector: '[option]' })
export class OptionDirective implements OnChanges {
  @Input() option?: {
    type?: string;
    brand?: string;
    products?: IProduct[]
  }
  key!: keyof IProduct

  @HostBinding('value') value?: string;
  @HostBinding('attr.data-content') content?: number;
  @HostBinding('class.showBadge') showBadge?: boolean;


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['option'].isFirstChange()) {
      this.key = (this.option?.brand) ? 'brand' : 'category'
      this.value = (this.option?.brand) ? this.option.brand : this.option?.type
    }
    const numOfProducts = this.getNumOfProducts()
    this.content = numOfProducts;
    this.showBadge = !!numOfProducts;
  }

  getNumOfProducts = () => (
    this.option?.products?.filter(product => ((product[this.key] as string)?.toLowerCase() === this.value)).length
  )
}
