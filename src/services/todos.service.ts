import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {BehaviorSubject, map} from "rxjs";

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

  todos$ = new BehaviorSubject<Todo[]>([])

  httpOptions = {
    withCredentials: true,
    headers: {
      'api-key': `${environment.apiKey}`,
    },
  }

  constructor(private http: HttpClient) {
  }

  getTodos() {
    this.http.get<Todo[]>(`${environment.baseUrl}/todo-lists`, this.httpOptions)
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }

  createTodo(title: string) {
    this.http.post<TodoResponse<{ item: Todo }>>(`${environment.baseUrl}/todo-lists`,
      {title}, this.httpOptions)
      .pipe(map(
        (data) => {
          const newTodo = data.data.item
          const stateTodos = this.todos$.getValue()
          return [newTodo, ...stateTodos]
        }
      ))
      .subscribe((todos) => {

        this.todos$.next(todos)
      })
  }

  deleteTodo(todoId: string) {
    this.http.delete<TodoResponse>(`${environment.baseUrl}/todo-lists/${todoId}`, this.httpOptions)
      .pipe(map(
        (res) => {
          if (res.resultCode === 0) {
            return this.todos$.getValue().filter(tl => tl.id !== todoId)
          } else {
            return this.todos$.getValue()
          }

        }
      )).subscribe(
      (todos) => {

        this.todos$.next(todos)
      }
    )
  }
}
