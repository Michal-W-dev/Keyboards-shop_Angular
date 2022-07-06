import { Pipe, PipeTransform } from '@angular/core';
import { AdminProductsComponent } from './feature/admin-products/admin-products.component';

@Pipe({ name: 'filterProducts' })
export class FilterProductsPipe implements PipeTransform {

  constructor(private host: AdminProductsComponent) { }

  transform(value: string) {
    value = value || ''
    this.host.filteredProducts = this.host.products.filter(({ _id, name, switches }) => [_id, name, switches].some(el => String(el).toLowerCase().includes(value?.toLowerCase())))
    return this.host.filteredProducts
  }

}
