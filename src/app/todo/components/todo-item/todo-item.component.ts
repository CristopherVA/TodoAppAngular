import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../interfaces/todo.interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styles: [
  ]
})
export class TodoItemComponent {

  @Input()
  public todo!: Todo;

  constructor(private todoService: TodoService) { }

  public changeTodoStatus(id: number, status: boolean): void {
    this.todoService.changeStatusById(id, status)
  }

  public deleteTodoById(id: number): void {
    this.todoService.deleteTodoById(id)
  }

}
