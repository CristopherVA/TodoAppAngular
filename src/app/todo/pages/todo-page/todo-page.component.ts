import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../interfaces/todo.interface'

@Component({
  selector: 'todo-page',
  templateUrl: './todo-page.component.html',
  styles: [],

})

export class TodoPageComponent {

  // public todos: Todo[] = []

  constructor(private todoService: TodoService) {}
  
  get todos(): Todo[]{
    return [...this.todoService.todos]
  }

  public createNewTodo(description: string): void {
    if(!description) return ;
    this.todoService.addNewTodo(description)
  }

}
