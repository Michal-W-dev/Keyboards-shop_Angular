import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/product.model';
import productsSeed from 'src/seed'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  imageIdx = 0;
  qty = 1;
  id?: string;
  product!: IProduct;

  constructor(private route: ActivatedRoute, private router: Router) {
    route.params.subscribe(({ id }) => [this.id, this.product] = [id, this.getProduct(id)])
  }

  handleAddToCart = () => this.router.navigateByUrl(`/cart/${this.id}?qty=${this.qty}`)

  get numReviews() { return this.product.numReviews === 1 ? '1 review' : `${this.product.numReviews} reviews` }
  get qtyArray() { return [...Array(this.product.countInStock > 10 ? 10 : this.product.countInStock)] }
  getProduct = (id: string) => productsSeed.find(({ _id }) => _id === id) || productsSeed[0]
}
