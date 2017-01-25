import { Component } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'todo-app',
  templateUrl: './todos.component.html',
  providers: [TodoService]
})
export class TodosComponent {
  todos = [];
  constructor(private todoService: TodoService) {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

  changeTodo(todo) {
    this.todoService.saveTodo(todo);
  }

  removeTodo(todo) {
    this.todoService.deleteTodo(todo);
  }

  ngOnInit() {

  }
}
