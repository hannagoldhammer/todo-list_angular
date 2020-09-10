import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todoModel';

@Component({
  selector: 'app-print-todo',
  templateUrl: './print-todo.component.html',
  styleUrls: ['./print-todo.component.scss']
})
export class PrintTodoComponent implements OnInit {
  @Input() todo: Todo = new Todo();
  @Output() delete = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
  }

  checkedTodo(todo: Todo){
    todo.complete = !todo.complete;
  }

  deleteEmit(){
    this.delete.emit(this.todo);
  }
}
