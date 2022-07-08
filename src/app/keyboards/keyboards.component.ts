import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../models/product.model';
import { ProductService } from '../product/data/product.service';
import { map, Observable, shareReplay, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-keyboards',
  templateUrl: './keyboards.component.html',
  styleUrls: ['./keyboards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KeyboardsComponent {
  getProducts$ = this.productService.getProducts().pipe(shareReplay())
  error$ = this.productService.error$
  search: string | null = null;
  curBrand = ''
  curType = ''
  brands$ = this.getProducts$.pipe(map(allProducts => new Set(allProducts.map(({ brand }) => brand?.toLowerCase()))), take(2))
  types$ = this.getProducts$.pipe(map(allProducts => new Set(allProducts.map(({ category }) => category?.toLowerCase()))), take(2))

  products?: IProduct[];
  searchedProducts$: Observable<IProduct[]>;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
    this.searchedProducts$ = route.queryParams.pipe(switchMap(
      ({ search, brand, type }) => this.getProducts$.pipe(map(products => {
        [this.curBrand, this.curType] = ['', '']
        if (brand) [this.curBrand, this.curType] = [brand, '']
        if (type) [this.curBrand, this.curType] = ['', type]
        if (search) {
          this.search = search;
          this.products = this.filterProducts(products, search)
        } else this.products = products

        const query: string = type || brand || search
        return (query) ? this.filterProducts(this.products, query) : products
      }))
    ))
  }

  clearFilter = () => ({ brand: this.curBrand || null, type: this.curType || null })

  filterProducts = (products: IProduct[], filterBy: string) => (
    products.filter(({ name, category }) => ([name, category].some(el => el?.toLowerCase().includes(filterBy))))
  )
}