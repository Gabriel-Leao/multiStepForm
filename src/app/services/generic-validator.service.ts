import { AbstractControl, ValidationErrors } from '@angular/forms';

export class GenericValidatorService {
  constructor() {}

  static completeName(control: AbstractControl): ValidationErrors | null {
    const { value } = control;
    if (value) {
      if (!/\w+\s+\w{2,}/.test(value)) {
        return { completeNameInvalid: true };
      }
    }
    return null;
  }

  static validatePhone(control: AbstractControl): ValidationErrors | null {
    let { value } = control;
    if (value) {
      value = value.replace(/\D/g, '');
      if (!(value.length >= 10 && value.length <= 11)) {
        return { phoneInvalid: true };
      }
      if (value.length === 11 && parseInt(value.substring(2, 3)) !== 9) {
        return { phoneInvalid: true };
      }
      const codigosDDD = [
        11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34,
        35, 37, 38, 41, 42, 43, 44, 45, 47, 48, 49, 51, 53, 54, 55, 61, 62, 64,
        63, 65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 86,
        87, 88, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99,
      ];
      if (!codigosDDD.includes(parseInt(value.substring(0, 2)))) {
        return { phoneInvalid: true };
      }
    }

    return null;
  }
}
