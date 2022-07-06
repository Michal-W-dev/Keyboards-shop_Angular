import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [Validators.minLength(3)]),
    'confirm-password': new FormControl('', [Validators.minLength(3)])
  })
  backgroundAnim = false;
  showMsg = false;
  constructor(private cd: ChangeDetectorRef) { }


  handleSubmit() {
    this.backgroundAnim = true;
    setTimeout(() => { this.backgroundAnim = false; this.cd.markForCheck() }, 2000)

    // Authorization is not yet implemented
    this.showMsg = true;
    console.log(this.registerForm.value);
  }

  getControl = (inputName: string) => this.registerForm.get(inputName) as FormControl
}
