import { Component } from '@angular/core';

@Component({
  selector: 'contact-me',
  template: `
    <p>Contact me at : dharamveer.1985@gmail.com</p>
  `
})
export class ContactMeComponent {
  constructor() { }

  ngOnInit() {
    console.log('hello `ContactMe` component');
  }

}
