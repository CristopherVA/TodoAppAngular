import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { NavTodoComponent } from './components/nav-todo/nav-todo.component';


@NgModule({
  declarations: [
    TodoListComponent,
    TodoPageComponent,
    NavTodoComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodoListComponent,
    TodoPageComponent,
    NavTodoComponent,
  ]
})
export class TodoModule { }
