import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../../models/Todo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  constructor(public todoService: TodoService) { }

  ngOnInit() {
  }

  destroyTodo(todo: Todo) {
    this.todoService.destroyTodo(todo);
  }

  statusTodo(todo: Todo) {
    this.todoService.statusTodo(todo);
  }

  editTodo(todo: Todo, editedTodo: HTMLInputElement) {
    this.todoService.editTodo(todo, editedTodo.value);
  }

  editMode(todo: Todo) {
    this.todoService.editMode(todo);
  }
}
