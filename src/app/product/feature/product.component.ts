import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  id = this.route.snapshot.params['id']
  product: IProduct = productsSeed.find(({ _id }) => _id === this.id) || productsSeed[0]

  constructor(private route: ActivatedRoute) {
  }

  handleAddToCart() {
    console.log('ADD TO CART') //TODO 
  }

  get numReviews() { return this.product.numReviews === 1 ? '1 review' : `${this.product.numReviews} reviews` }
  get qtyArray() { return [...Array(this.product.countInStock > 10 ? 10 : this.product.countInStock)] }
}
