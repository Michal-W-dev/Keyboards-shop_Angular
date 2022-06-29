import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  @Input() variant: 'primary' | 'secondary' | 'info' | 'warning' | 'danger' = 'info';

  @Input() trigger: boolean | null = null;                            // Trigger animation
  get show() { return (this.trigger === null) ? true : false }        // Show without animation (if trigger is not set)
}
