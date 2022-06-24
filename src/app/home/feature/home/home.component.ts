import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';
import productsSeed from 'src/seed'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: IProduct[] = productsSeed
  constructor() { }

  ngOnInit(): void {
  }

}
