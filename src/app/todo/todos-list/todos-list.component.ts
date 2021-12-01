import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import {Todo} from '../../models/Todo';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {

  todos: Todo[];

  constructor(public todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

}
