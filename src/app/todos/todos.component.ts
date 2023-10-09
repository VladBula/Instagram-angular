import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface CreateTodoResponse {
  data: {
    item: Todo
  };
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
}

export interface DeleteTodoResponse {
  data: {}
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
}

interface Todo {
  id: string,
  title: string,
  addedDate: string,
  order: number
}

// "id": "7b659935-98e7-423e-8f40-2c2a7db62460",
//   "title": "Angular35",
//   "addedDate": "2022-12-09T16:37:55.163",
//   "order": -10

@Component({
  selector: 'inst-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = []
  httpOptions = {
    withCredentials: true,
    headers: {
      'api-key': '32715ae4-a491-4357-baa9-372f740761e4',
    },
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos() {
    this.http.get<Todo[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', this.httpOptions).subscribe((res) => {
      this.todos = res
    })
  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = "ang" + randomNumber
    this.http.post<CreateTodoResponse>('https://social-network.samuraijs.com/api/1.1/todo-lists', {title}, this.httpOptions).subscribe(res => {
      this.todos.unshift(res.data.item)
    })
  }

  deleteTodo() {
    const todoId ='783d4ca2-1363-40a6-ad5c-5501872be830'
    this.http.delete<DeleteTodoResponse>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`, this.httpOptions)
      .subscribe((res)=>{
        if (res.resultCode === 0)
        this.todos = this.todos.filter(tl => tl.id !== todoId)
      })
  }
}
