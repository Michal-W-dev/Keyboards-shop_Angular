import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { delay, Observable, of, startWith } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [Validators.minLength(3)])
  })
  showMsg = false;
  backgroundAnim?: Observable<boolean>;


  handleSubmit() {
    this.backgroundAnim = of(false).pipe(delay(2000), startWith(true))

    // Authorization is not yet implemented
    this.showMsg = true;
    console.log('Form value: ', this.loginForm.value);
  }

  getControl = (inputName: string) => this.loginForm.get(inputName) as FormControl
}
