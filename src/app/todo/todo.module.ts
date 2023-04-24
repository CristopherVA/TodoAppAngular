import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { NavTodoComponent } from './components/nav-todo/nav-todo.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    NavTodoComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
  ],
  exports: [
    NavTodoComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoPageComponent,
  ]
})
export class TodoModule { }
