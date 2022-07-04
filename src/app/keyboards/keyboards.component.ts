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
  query = ''
  curBrand = ''
  curType = ''
  search: string | null = null;
  searchedProducts?: IProduct[];
  products?: IProduct[];
  types = new Set(seedProducts.map(({ category }) => category.toLowerCase()))
  brands = new Set(seedProducts.map(({ brand }) => brand.toLowerCase()))

  constructor(private route: ActivatedRoute) {
    route.queryParams.subscribe(({ search, brand, type }) => {
      [this.curBrand, this.curType] = ['', '']
      if (brand) [this.curBrand, this.curType] = [brand, '']
      if (type) [this.curBrand, this.curType] = ['', type]
      if (search) {
        this.search = search;
        this.searchedProducts = seedProducts.filter(({ name, category }) => ([name, category].some(el => el?.toLowerCase().includes(search))))
      } else this.searchedProducts = seedProducts

      this.query = type || brand || search
      this.products = (this.query) ? this.searchedProducts?.filter(({ name, category }) => ([name, category].some(el => el?.toLowerCase().includes(this.query)))) : seedProducts
    });
  }

  numOfProductType(type: string) {
    return this.searchedProducts?.filter(({ category }) => category?.toLowerCase() === type).length
  }

  numOfProductBrand(brand: string) {
    return this.searchedProducts?.filter(product => product.brand?.toLowerCase() === brand).length
  }

  clearFilter = () => ({ brand: this.curBrand || null, type: this.curType || null })
}