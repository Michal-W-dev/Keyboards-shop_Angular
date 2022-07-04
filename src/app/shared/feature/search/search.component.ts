import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProduct } from 'src/app/models/product.model';
import seedProduct from 'src/seed'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  @Output() hide = new EventEmitter()

  // Search by input -------------
  @Input() search$?: Observable<string>
  products: IProduct[] = seedProduct
  filteredProducts?: Observable<IProduct[]>

  // Search by types -------------
  @Input() showProducts = true;
  types = new Set(this.products.map(({ category }) => category?.toLowerCase()))


  ngOnInit(): void {
    this.filteredProducts = this.search$?.pipe(map(search => (
      this.products.filter(({ name, category }) => ([name, category].some(el => el?.toLowerCase().includes(search))))
    )))
  }

  filterUnique = (filteredProducts: IProduct[], by: keyof IProduct) => (
    new Set(filteredProducts.map(product => (product[by] as string).toLowerCase()))
  )
}
