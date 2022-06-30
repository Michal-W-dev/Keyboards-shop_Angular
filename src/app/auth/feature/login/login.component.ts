import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  backgroundAnim = false;
  showMsg = false;

  constructor(private cd: ChangeDetectorRef) { }

  handleSubmit() {
    this.backgroundAnim = true;
    setTimeout(() => { this.backgroundAnim = false; this.cd.markForCheck() }, 2000)

    // Authorization is not yet implemented
    this.showMsg = true;
    console.log(this.loginForm.value);
  }

  getControl(inputName: string) { return this.loginForm.get(inputName) as FormControl }
}
