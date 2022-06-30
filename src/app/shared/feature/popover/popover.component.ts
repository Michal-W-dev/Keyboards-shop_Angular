import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
declare let bootstrap: any;

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopoverComponent implements AfterViewInit {
  @ViewChild('popover') child?: ElementRef<HTMLSpanElement>;
  @Input() title = 'Under Construction'
  @Input() content = 'Sorry, this component is not fully functional yet.'
  @Input() placement = 'top'
  @Input() offset = '0, 0'

  ngAfterViewInit(): void {
    if (this.child) new bootstrap.Popover(this.child.nativeElement)
  }
}
