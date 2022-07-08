import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, startWith, Subject } from 'rxjs';
import { IProduct } from 'src/app/models/product.model';
import { products_db as seedData } from 'src/seed'


@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly url = 'https://keyboards--shop-default-rtdb.europe-west1.firebasedatabase.app/'
  error$ = new Subject<string>()
  constructor(private http: HttpClient) { }



  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.url}/products.json`).pipe(startWith([]), map(
      data => data && Object.entries(data).map(product => ({ _id: product[0], ...product[1] as IProduct }))
    ), catchError((err) => this.handleError(err, [])))
  }

  getProduct(id: string) {
    return this.http.get<IProduct>(`${this.url}/products/${id}.json`).pipe(map(product => {
      (product) ? product._id = id : this.error$.next('Id not found');
      return product
    }), catchError((err) => this.handleError(err, null)))
  }

  handleError = <T>(err: HttpErrorResponse | string, obs: T) => {
    const error = (typeof err === 'string') ? err : (err.statusText === 'Not Found') ? 'Cannot fetch data from database.' : err.statusText
    this.error$.next(error);
    return of(obs)
  }

  postSeedProduct = () => this.http.post(`${this.url}/products.json`, seedData[5]).subscribe(console.log);
}
