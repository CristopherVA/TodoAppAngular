import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OptionType, Todo } from '../../interfaces/todo.interface';

@Component({
  selector: 'nav-todo',
  templateUrl: './nav-todo.component.html',
})
export class NavTodoComponent {

  @Input()
  public todos: Todo[] = []

  @Output()
  public onValueDelete = new EventEmitter()

  constructor() { }

  public emiterDelete(id: number): void {
    this.onValueDelete.emit(id)
  }
}
