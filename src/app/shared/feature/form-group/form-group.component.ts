import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormGroupComponent implements AfterViewInit {
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  /**  Form-Group - 3 configurations:
   * standard - label above input
   * inline - label on the same line as input   (inline = true)
   * float - placeholder animate above input  (float = true)
   */
  @Input() float = false;
  @Input() inline = false;
  @Input() autofocus = false
  @Input() placeholder?: string;
  @Input() name = ''
  @Input() get type() { return (this.name === 'email') ? 'email' : (this.name === 'password') ? 'password' : 'text' }
  @Input() control: FormControl = new FormControl;


  ngAfterViewInit(): void {
    if (this.autofocus) this.input.nativeElement.focus()
  }
}
