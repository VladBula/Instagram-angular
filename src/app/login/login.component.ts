import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'inst-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    pass: new FormControl
  })

  get email() { return this.loginForm.get('email'); }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    alert(JSON.stringify(this.loginForm.value))
  }
}
