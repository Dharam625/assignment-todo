import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from './validation.service';

@Component({
  selector: 'app-display-message',
  template: `
    <div class="error-message" *ngIf="errorMessage !== null">
      {{errorMessage}}
    </div>
  `,
  styleUrls: ['display-message.component.scss']
})
export class DisplayMessageComponent {
  @Input() control: FormControl;

  constructor() { }

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }
}
