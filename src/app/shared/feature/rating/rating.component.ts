import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() value: number[] = []
  @Input() numReviews = 0;
  avgValue = 0;
  color = ''
  @HostBinding('style.--ratingFontSize') @Input() fontSize = '1.25rem'

  ngOnInit(): void {
    this.avgValue = this.value.length ? this.value.reduce((acc, val) => acc + val) / this.value.length : 0;
    this.color = (this.avgValue > 4.5) ? 'GreenYellow' : (this.avgValue > 2) ? 'Gold' : 'Tomato';
  }

  getStar(idx: number) {
    return (this.avgValue > idx + 0.75) ? 'star' : (this.avgValue - idx > 0.25) ? 'star_half' : 'star_border'
  }
}
