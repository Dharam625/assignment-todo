import { ActivatedRoute, Data } from '@angular/router';
import { inject, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';

describe('toDoComponentComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: ActivatedRoute,
        useValue: {
          data: {
            subscribe: (fn: (value: Data) => void) => fn({
              yourData: 'yolo'
            })
          }
        }
      },
      TodosComponent
    ]
  }));

  it('should log ngOnInit', inject([TodosComponent], (toDoComponent: TodosComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    toDoComponent.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
























