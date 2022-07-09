import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { delay, Observable, of, startWith } from 'rxjs';

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
  showMsg = false;
  backgroundAnim?: Observable<boolean>;


  handleSubmit() {
    this.backgroundAnim = of(false).pipe(delay(2000), startWith(true))

    // Authorization is not yet implemented
    this.showMsg = true;
    console.log(this.registerForm.value);
  }

  getControl = (inputName: string) => this.registerForm.get(inputName) as FormControl
}
