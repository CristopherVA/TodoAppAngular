import { Injectable, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';

@Injectable({ providedIn: 'root' })
export class TodoService {

  constructor() {
    this.getTodoLocalStorage()
  }

  public todos: Todo[] = []

  private setTodoToLocalStorage(todo: Todo[]): void {
    localStorage.setItem('todos', JSON.stringify(todo))
  }

  private getTodoLocalStorage(): void {
    this.todos = JSON.parse(localStorage.getItem('todos') || '[]')
  }

  public getAllTodo(): Todo[] {
    return this.todos
  }

  public addNewTodo(value: string) {

    if (!value) return;

    const newTodo: Todo = {
      id: this.todos.length + 1,
      description: value,
      completed: false
    }

    this.todos.unshift(newTodo)
    this.setTodoToLocalStorage(this.todos)
  }

  public changeStatusById(id: number, status: boolean): void {
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = status
      }
      return todo
    })
    this.setTodoToLocalStorage(this.todos)
  }
  
  public deleteTodoById(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id)
    this.setTodoToLocalStorage(this.todos)
  }
}
