import {Component, OnInit} from '@angular/core';
import {Todo, TodosService} from "../../services/todos.service";



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


  constructor(private todosService: TodosService) {
  }

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos() {
    this.todosService.getTodos().subscribe((res) => {
      this.todos = res
    })
  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = "ang" + randomNumber
    this.todosService.createTodo(title).subscribe(res => {
      this.todos.unshift(res.data.item)
    })
  }

  deleteTodo() {
    const todoId ='b6049a15-5510-45ca-839d-2f283e489513'
   this.todosService.deleteTodo(todoId)
      .subscribe((res)=>{
        if (res.resultCode === 0)
        this.todos = this.todos.filter(tl => tl.id !== todoId)
      })
  }
}
