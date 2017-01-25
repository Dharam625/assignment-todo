import { Routes } from '@angular/router';
import { TodosComponent } from './todos';
import { AddTodoComponent } from './add-todo';
import { ContactMeComponent } from './contact-me';
import { NoContentComponent } from './no-content';


export const ROUTES: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'todos', component: TodosComponent },
  { path: 'add-todo', component: AddTodoComponent },
  { path: 'contactMe', component: ContactMeComponent },
  { path: '**', component: NoContentComponent }
];
