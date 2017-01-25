export class ValidationService {

  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    let validatorValueLength = validatorValue ? validatorValue.requiredLength : -1;

    let config = {
      'required': 'Required',
      'maxlength': 'Should have a length less than ' + validatorValueLength,
      'minlength': 'Should have a length greater than ' + validatorValueLength,
      'invalidBookingCode': 'Invalid booking code',
      'invalidFamilyName': 'Invalid family name'
    };
    return config[validatorName];
  }

  static bookingCodeValidator(control) {
    if (control.value.match(/^[2-9a-zA-Z]+$/)) {
      return null;
    } else {
      return { 'invalidBookingCode': true };
    }
  }

  static familyNameValidator(control) {
    if (control.value.match(/^[a-zA-Z]+$/)) {
      return null;
    } else {
      return { 'invalidFamilyName': true };
    }
  }
}
