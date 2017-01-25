import {
  inject,
  TestBed
} from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('App', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AppComponent
    ]}));

  it('should have a url', inject([ AppComponent ], (app: AppComponent) => {
    expect(app.url).toEqual('localhost:3000');
  }));

});
