import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Test1Component} from "./test1/test1.component";
import { DiComponent } from './di/di.component';
import { Test7Component } from './test7/test7.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { TaskComponent } from './task/task.component';
import {ValueService} from "../services/value.service";
import { TodosComponent } from './todos/todos.component';
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import {RouterModule} from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersComponent } from './components/users/users/users.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    DiComponent,
    Test7Component,
    ParentComponent,
    ChildComponent,
    TaskComponent,
    TodosComponent,
    LoginComponent,
    PageNotFoundComponent,
    UsersComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ValueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
