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
    if (this.option === 'all') {
      this.showTodos = this.todos;
    } else if (this.option === 'active') {
      this.showTodos = this.todos.filter((todo) => todo.completed === false);
    } else {
      this.showTodos = this.todos.filter((todo) => todo.completed === true);
    }
  }

}
