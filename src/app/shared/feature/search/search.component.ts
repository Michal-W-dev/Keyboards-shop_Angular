import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, Observable, shareReplay, switchMap } from 'rxjs';
import { IProduct } from 'src/app/models/product.model';
import { ProductService } from 'src/app/product/data/product.service';


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
  products$ = this.productService.getProducts().pipe(shareReplay())
  filteredProducts?: Observable<IProduct[]>

  // Search by types -------------
  @Input() showProducts = true;
  types = ['mechanical', 'membrane', 'hybrid']


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.filteredProducts = this.search$?.pipe(debounceTime(50), distinctUntilChanged(), switchMap(search =>
      this.products$.pipe(map(products => products.filter(({ name, category }) => ([name, category].some(el => el?.toLowerCase().includes(search)))
      ))))
    )
  }

  filterUnique = (filteredProducts: IProduct[], by: keyof IProduct) => (
    new Set(filteredProducts.map(product => (product[by] as string).toLowerCase()))
  )
}
