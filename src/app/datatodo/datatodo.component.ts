import { Component, OnInit, ElementRef } from '@angular/core';
import { Todo } from '../models/todoModel';

@Component({
  selector: 'app-datatodo',
  templateUrl: './datatodo.component.html',
  styleUrls: ['./datatodo.component.scss']
})
export class DatatodoComponent implements OnInit {

  showDiv: boolean = false;
  finishedTodo = "finishedTodo";
  unFinishedTodo = "unFinishedTodo";
  searchValue: string = "";
  listOfTodos: Todo[] = [];

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    if(localStorage.getItem('todos')) {
      this.listOfTodos = JSON.parse(localStorage.getItem('todos'))
    } else {
      this.listOfTodos = []
    }

    this.showDiv = this.listOfTodos.length > 0;
  }

  addTodo(todoInput: string){
    let newTodo = new Todo()
    newTodo.title = todoInput;
    newTodo.complete = false;
    console.log(newTodo);
    this.listOfTodos.push(newTodo);

    window.localStorage.setItem('todos', JSON.stringify(this.listOfTodos));

    this.showDiv = true;
    this.searchValue = "";
  }

  deleteFunction(todo: Todo){
    for( var i = 0; i < this.listOfTodos.length; i++){
      if ( this.listOfTodos[i] === todo) {
        this.listOfTodos.splice(i, 1);
      }
    }
    window.localStorage.setItem('todos', JSON.stringify(this.listOfTodos));
  }

  sortFunction(){
    this.listOfTodos.sort((todoA, todoB) => {
      return todoA.title.localeCompare(todoB.title, "sv");
    });
  }
}
