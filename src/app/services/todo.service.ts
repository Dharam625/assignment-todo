import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Todo} from "../models/todo";

@Injectable()
export class TodoService {
  //:TODO should be used from as per environment
  private API_PATH: string = 'http://localhost:3004/todos/';

  constructor(private http: Http) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get(this.API_PATH)
      .map(res => res.json());
  }

  saveTodo(todo) {
      return this.http.put(this.API_PATH + todo.id, todo)
        .map(res => res.json());
  }

  deleteTodo(todo) {
    return this.http.delete(this.API_PATH + todo.id)
      .map(() => todo);
  }
}
