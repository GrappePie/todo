import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {Todo} from '../../models/Todo';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  todos: Todo[];
  completedTodos = false; pendindTodos = false; allTodos = false;

  constructor(public todoService: TodoService) { }

  ngOnInit() {
  }

  destroyCompletedTodos() {
    this.todoService.destroyCompletedTodos();
  }

  getCompletedTodos() {
    this.todos = this.todoService.getCompletedTodos();
    this.completedTodos = true;
    this.pendindTodos = false;
    this.allTodos = false;
  }

  getPendingTodos() {
    this.todos = this.todoService.getPendingTodos();
    this.pendindTodos = true;
    this.completedTodos = false;
    this.allTodos = false;
  }

  getTodos() {
    this.todos = this.todoService.getTodos();
    this.allTodos = true;
    this.pendindTodos = false;
    this.completedTodos = false;
  }

}
