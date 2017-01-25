import { Component } from '@angular/core';
import {Todo} from "../models/todo";
import {TodoService} from "../services/todo.service";
import {FormGroup, Validators, FormBuilder} from "@angular/forms";

@Component({
  selector: 'add-todo',
  styleUrls: [ './add-todo.component.css' ],
  templateUrl: './add-todo.component.html',
  providers: [TodoService]
})
export class AddTodoComponent {
  private todoForm: FormGroup;

  todo: Todo = new Todo();
  constructor(private fb: FormBuilder, private todoService: TodoService) {}


  addTodo() {
    this.todoService.saveTodo(this.todo);
    this.todo = new Todo();
  }

  ngOnInit() {
    this.todoForm = this.fb.group({
      todo: ['', [Validators.required, Validators.maxLength(20)]]
    });
  }
}
