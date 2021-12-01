import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  constructor(public todoService: TodoService) {  }

  ngOnInit() {
  }

  addTodo(newTodo: HTMLInputElement) {
    this.todoService.addTodo({
      title: newTodo.value,
      completed: false,
      ediding: false
    });
    newTodo.value = '';
    newTodo.focus();
  }

}
