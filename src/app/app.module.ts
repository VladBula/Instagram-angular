import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Test1Component} from "./test1/test1.component";
import { DiComponent } from './di/di.component';
import { Test7Component } from './test7/test7.component';
import {FormsModule} from "@angular/forms";
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { TaskComponent } from './task/task.component';
import {ValueService} from "../services/value.service";
import { TodosComponent } from './todos/todos.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    DiComponent,
    Test7Component,
    ParentComponent,
    ChildComponent,
    TaskComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ValueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
