import { Component } from '@angular/core';
import seedProducts from 'src/seed'
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../models/product.model';

@Component({
  selector: 'app-keyboards',
  templateUrl: './keyboards.component.html',
  styleUrls: ['./keyboards.component.scss']
})
export class KeyboardsComponent {
  search: string | null = null;
  curBrand = ''
  curType = ''
  brands = new Set(seedProducts.map(({ brand }) => brand.toLowerCase()))
  types = new Set(seedProducts.map(({ category }) => category.toLowerCase()))
  products?: IProduct[];
  searchedProducts?: IProduct[];


  constructor(private route: ActivatedRoute) {
    route.queryParams.subscribe(({ search, brand, type }) => {
      [this.curBrand, this.curType] = ['', '']
      if (brand) [this.curBrand, this.curType] = [brand, '']
      if (type) [this.curBrand, this.curType] = ['', type]
      if (search) {
        this.search = search;
        this.products = this.filterProducts(seedProducts, search)
      } else this.products = seedProducts

      const query: string = type || brand || search
      this.searchedProducts = (query) ? this.filterProducts(this.products, query) : seedProducts
    });
  }

  clearFilter = () => ({ brand: this.curBrand || null, type: this.curType || null })

  filterProducts = (products: IProduct[], filterBy: string) => (
    products.filter(({ name, category }) => ([name, category].some(el => el?.toLowerCase().includes(filterBy))))
  )
}