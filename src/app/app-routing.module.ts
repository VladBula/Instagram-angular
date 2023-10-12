import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Test1Component} from "./test1/test1.component";
import {DiComponent} from "./di/di.component";
import {ParentComponent} from "./parent/parent.component";
import {TaskComponent} from "./task/task.component";
import {TodosComponent} from "./todos/todos.component";
import {LoginComponent} from "./login/login.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {UsersComponent} from "./components/users/users/users.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AppComponent} from "./app.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: AppComponent},
    {path: 'users', component: UsersComponent},
    {path: 'profile/:userId', component: ProfileComponent},
    {path: 'test1', component: Test1Component},
    {path: 'di', component: DiComponent},
    {path: 'parent', component: ParentComponent},
    {path: 'task', component: TaskComponent},
    {path: 'todos', component: TodosComponent},
    {path: 'login', component: LoginComponent},
    {path: '404', component: PageNotFoundComponent},
    {path: '**', redirectTo: '/404'},
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
