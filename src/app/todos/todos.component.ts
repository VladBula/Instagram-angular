import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

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

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getTodos()
  }

  private getTodos() {
    this.http.get<Todo[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', {
      withCredentials: true,
      headers: {
        'api-key': '32715ae4-a491-4357-baa9-372f740761e4',
      },
    }).subscribe((res) => {
      this.todos = res
    })
  }
}
