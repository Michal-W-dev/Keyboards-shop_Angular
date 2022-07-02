import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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
  @Output() emitHide = new EventEmitter()

  // Search by types -------------
  @Input() showProducts = true;
  types = ['mechanical', 'hybrid', 'membrane']

  // Search by input -------------
  @Input() search$?: Observable<string>
  products: IProduct[] = seedProduct
  filteredProducts?: Observable<IProduct[]>

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.filteredProducts = this.search$?.pipe(map(search => (
      this.products.filter(({ name, category }) => ([name, category].some(el => el?.toLowerCase().includes(search))))
    )))
  }

  toSearchPage = (type: string) => {
    this.router.navigateByUrl(`/keyboards/?search=${type}`);
    this.emitHide.emit()
  }

  toProductPage = (_id: string) => {
    this.router.navigateByUrl(`/product/${_id}`)
    this.emitHide.emit()
  }

  filterUniqueSearchedTypes = (filteredProducts: IProduct[]) => {
    const i: string[] = []
    return filteredProducts.filter(({ category }, idx) => (
      (category) ? i.push(category) && i.indexOf(category) === idx : false
    ))
  }
}
