import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Todo, TypeOption } from '../../interfaces/todo.interface';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styles: [
  ]
})
export class TodoListComponent implements OnChanges {

  @Input()
  public todos: Todo[] = []

  @Input()
  public option!: TypeOption;

  public showTodos!: Todo[]

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.validateTodosToShow()
  }

  // Validating before to render in html
  private validateTodosToShow(): void {
    switch (this.option) {
      case 'all':
        this.showTodos = this.todos;
        break;
      case 'active':
        this.showTodos = this.todos.filter((todo) => todo.completed === false);
        break;
      case 'completed':
        this.showTodos = this.todos.filter((todo) => todo.completed === true);
        break;
      default:
        this.showTodos = this.todos;
    }
  }
}
