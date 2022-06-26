import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.scss']
})
export class ProductReviewComponent implements OnInit {
  @Input() rating: number[] = []
  @Input() numReviews: number = 0;
  avgRating = 0;
  starNum = 0;
  starArray = Array(5).fill(0)
  constructor() { }

  ngOnInit(): void {
    this.avgRating = this.rating.length ? Math.round(this.rating.reduce((acc, val) => acc + val) * 10 / this.rating.length) / 10 : 0;
    console.log({ review: this.numReviews })
  }

  countRate = (whichRate: number) => {
    return this.rating.filter(x => { return x === whichRate }).length
  }
  ratePercent = (whichRate: number) => {
    return this.countRate(whichRate) / this.rating.length * 100 + '%'
  }
}
