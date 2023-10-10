import {Component, OnDestroy, OnInit} from '@angular/core';
import {Todo, TodosService} from "../../services/todos.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";


// "id": "7b659935-98e7-423e-8f40-2c2a7db62460",
//   "title": "Angular35",
//   "addedDate": "2022-12-09T16:37:55.163",
//   "order": -10

@Component({
  selector: 'inst-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit{

  todos$!: Observable<Todo[]>
  error = ''

  constructor(private todosService: TodosService) {
  }

  ngOnInit(): void {
    //subscribe
    this.todos$ = this.todosService.todos$
    this.getTodos()
  }

  _getTodos() {
    // this.subscriptions.add(
    //   this.todosService.getTodos().subscribe(
    //     {
    //       next: (res) => {
    //         this.todos = res
    //       },
    //       error: (error: HttpErrorResponse) => {
    //         this.error = error.message
    //       }
    //     })
    // )
  }

  getTodos() {
    this.todosService.getTodos()
      // this.todosService.getTodos().subscribe(
      //   {
      //     next: (res) => {
      //       this.todos = res
      //     },
      //     error: (error: HttpErrorResponse) => {
      //       this.error = error.message
      //     }
      //   })

  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = "ang" + randomNumber

    this.todosService.createTodo(title)

    // this.subscriptions.add(
    //   this.todosService.createTodo(title).subscribe(res => {
    //     this.todos.unshift(res.data.item)
    //   })
    // )
  }

  deleteTodo() {


    const todoId = 'cc8064a6-d308-4595-8725-d3297a27a1e6'

    this.todosService.deleteTodo(todoId)
    // this.subscriptions.add(
    //   this.todosService.deleteTodo(todoId)
    //     .subscribe((res) => {
    //       if (res.resultCode === 0)
    //         this.todos = this.todos.filter(tl => tl.id !== todoId)
    //     })
    // )

  }


}
