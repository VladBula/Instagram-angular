import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

export interface TodoResponse<T = {}> {
  data: T;
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
}

export interface Todo {
  id: string,
  title: string,
  addedDate: string,
  order: number
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  httpOptions = {
    withCredentials: true,
    headers: {
      'api-key': `${environment.apiKey}`,
    },
  }

  constructor(private http: HttpClient) {
  }

  getTodos() {
    return this.http.get<Todo[]>(`${environment.baseUrl}/todo-lists`, this.httpOptions)
  }

  createTodo(title: string) {
    return this.http.post<TodoResponse<{item: Todo}>>(`${environment.baseUrl}/todo-lists`,
      {title}, this.httpOptions)
  }

  deleteTodo(todoId:string) {
   return this.http.delete<TodoResponse>(`${environment.baseUrl}/todo-lists/${todoId}`, this.httpOptions)
  }
}
