import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenericValidatorService } from 'src/app/services/generic-validator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  form: FormGroup;

  step: number = 1;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required, GenericValidatorService.completeName]],
      email: [null, [Validators.required, Validators.email]],
      phoneNumber: [
        null,
        [Validators.required, GenericValidatorService.validatePhone],
      ],
      plan: [null, Validators.required],
      subscription: [null, Validators.required],
      addOns: [null],
    });
  }

  onSubmit() {
    console.log(this.form.getRawValue());
  }
}
