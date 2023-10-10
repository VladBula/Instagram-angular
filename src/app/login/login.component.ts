import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'inst-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl,
    pass: new FormControl
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    alert(JSON.stringify(this.loginForm.value))
  }
}
