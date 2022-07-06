import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminProfileComponent {
  profileForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [Validators.minLength(3)]),
    'confirm-password': new FormControl('', [Validators.minLength(3)]),
    isAdmin: new FormControl(false)
  })
  backgroundAnim = false;
  showMsg = false;
  isAdmin = false;

  constructor(private cd: ChangeDetectorRef) { }

  handleSubmit() {
    this.backgroundAnim = true;
    setTimeout(() => { this.backgroundAnim = false; this.cd.markForCheck() }, 2000)

    // Authorization is not yet implemented
    this.showMsg = true;
    console.log('Form value: ', this.profileForm.value);
  }

  getControl = (inputName: string) => this.profileForm.get(inputName) as FormControl
}
