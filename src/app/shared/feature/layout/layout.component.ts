import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  showProducts = false;

  constructor(public router: Router) { }

  handleSubmit = () => { }

  toggleShowProducts = () => this.showProducts = !this.showProducts

}
