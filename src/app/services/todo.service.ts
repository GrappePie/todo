import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[];
  constructor() {
    this.todos = [];
  }

  getTodos() {
    if (localStorage.getItem('todos') === null) {
      return this.todos;
    } else {
      this.todos = JSON.parse(localStorage.getItem('todos'));
      return this.todos;
    }
  }

  getCompletedTodos() {
    if (localStorage.getItem('todos') === null) {
      return this.todos.filter(function (to) {
        return to.completed === true;
      });
    } else {
      this.todos = JSON.parse(localStorage.getItem('todos'));
      return this.todos.filter(function (to) {
        return to.completed === true;
      });
    }
  }

  getPendingTodos() {
    if (localStorage.getItem('todos') === null) {
      return this.todos.filter(function (to) {
        return to.completed === false;
      });
    } else {
      this.todos = JSON.parse(localStorage.getItem('todos'));
      return this.todos.filter(function (to) {
        return to.completed === false;
      });
    }
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    let todos = [];
    if (localStorage.getItem('todos') === null) {
      todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(todos));
    } else {
      todos = JSON.parse(localStorage.getItem('todos'));
      todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }

  destroyTodo(todo: Todo) {
    for (let i = 0; i < this.todos.length; i++) {
      if (todo === this.todos[i]) {
        this.todos.splice(i, 1);
        localStorage.setItem('todos', JSON.stringify(this.todos));
      }
    }
  }

  async destroyCompletedTodos() {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].completed) {
        this.todos.splice(i, 1);
        await localStorage.setItem('todos', JSON.stringify(this.todos));
      }
    }
  }

  statusTodo(todo: Todo) {
    for (let i = 0; i < this.todos.length; i++) {
      if (todo === this.todos[i]) {
        this.todos[i].completed = !this.todos[i].completed;
        localStorage.setItem('todos', JSON.stringify(this.todos));
      }
    }
  }

  editTodo(todo: Todo, editedTodo) {
    for (let i = 0; i < this.todos.length; i++) {
      if (todo === this.todos[i]) {
        this.todos[i].title = editedTodo;
        this.todos[i].completed = false;
        localStorage.setItem('todos', JSON.stringify(this.todos));
      }
    }
  }

  editMode(todo: Todo) {
    for (let i = 0; i < this.todos.length; i++) {
      if (todo === this.todos[i]) {
        this.todos[i].ediding = !this.todos[i].ediding;
        localStorage.setItem('todos', JSON.stringify(this.todos));
      }
    }
  }
}
