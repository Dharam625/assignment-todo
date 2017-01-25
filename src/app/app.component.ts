import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './reducers';
import { OidActions } from './actions';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  url = "localhost:3000";
  constructor() { }

  ngOnInit() {
    console.log("Hello App compoonent")
  }
}
