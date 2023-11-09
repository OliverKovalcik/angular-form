import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { noSpaceAllowed } from '../Validators/noSpaceAllowed.validator';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent {
  registrationForm!: FormGroup;

  sportsList = ['futbal', 'volejbal', 'plávanie', 'bedminton', 'stolný tenis'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(25), noSpaceAllowed]],
      lastName: ['', [Validators.required, Validators.maxLength(50), noSpaceAllowed]],
      age: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      hasAttendedBefore: [false],
      preferredSport: ['', Validators.required],
      note: ['', Validators.maxLength(4000)],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      alert('Formulár bol úspešne vyplnený');
    } else {
      alert('Formulár bol vyplnený nesprávne');
    }
  }
}
