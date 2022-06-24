import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input() carouselItems = 4;
  @Input() products: IProduct[] = [];

  get itemsArr() {
    // Not allow to surpass number of products. Return created array from requested number of items.
    const itemsNum = this.carouselItems < this.products.length ? this.carouselItems : this.products.length
    return [...Array(itemsNum).keys()]
  }
}
