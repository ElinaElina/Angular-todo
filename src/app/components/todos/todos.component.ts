import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from '../../models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
todos:Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit() {
   this.todoService.getTodos().subscribe(todos => {
     this.todos = todos;
   });
    
  }
deleteTodo(todo:Todo){
  // console.log('delete me');
  // UI delete, in filter loop all todo
  // inn brekets return all todos which doesnt have id, but only from UI not from server 
  this.todos = this.todos.filter(t => t.id !== todo.id); 
  //delete also in server
   this.todoService.deleteTodo(todo).subscribe();
}
addTodo(todo:Todo) {

  this.todoService.addTodo(todo).subscribe(todo => {
    this.todos.push(todo);
  });
}
}
