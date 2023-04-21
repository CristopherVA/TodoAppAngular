import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';


@NgModule({
  declarations: [
    TodoListComponent,
    TodoPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodoPageComponent
  ]
})
export class TodoModule { }
