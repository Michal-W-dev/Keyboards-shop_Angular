import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { delay, Observable, of, startWith } from 'rxjs';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminProfileComponent {
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [Validators.minLength(3)]),
    'confirm-password': new FormControl('', [Validators.minLength(3)]),
    isAdmin: new FormControl<boolean>(true)
  })
  showMsg = false;
  isAdmin = true;
  backgroundAnim?: Observable<boolean>;


  handleSubmit() {
    this.backgroundAnim = of(false).pipe(delay(2000), startWith(true))

    // Authorization is not yet implemented
    this.showMsg = true;
    console.log('Form value: ', this.profileForm.value);
  }

  getControl = (inputName: string) => this.profileForm.get(inputName) as FormControl
}
