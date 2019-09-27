import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  // looping can be unlimited , to limited it put ? mark and _limited=how much want
// todosUrl:string = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
// but you not alway use it
todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
todosLimit = '?_limit=5';
  constructor(private http:HttpClient) { }

  //Get Todos from backend
  getTodos():Observable<Todo[]>{
    // next syntax adding todosLimit of end URL that string
    
   return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
      
  }
  // Delete Todo from server
  deleteTodo(todo:Todo):Observable<Todo>{
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }
  //Add Todo
  addTodo(todo:Todo):Observable<Todo>{
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }
 //Toggle completed
  toggleCompleted(todo: Todo):Observable<any>{
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }
}
