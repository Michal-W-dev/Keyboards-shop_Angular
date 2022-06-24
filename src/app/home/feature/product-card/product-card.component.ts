import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: IProduct | null = null;
  isHovered = false;
  constructor() { }

  ngOnInit(): void {
  }

}
