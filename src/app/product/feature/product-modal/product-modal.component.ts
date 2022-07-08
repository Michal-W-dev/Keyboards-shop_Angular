import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductModalComponent {
  @Input() name = ''
  @Input() images: string[] = []
  @Input() imgIndex = 0;
}
