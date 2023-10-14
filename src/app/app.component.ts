import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'inst';
  text = 'start'

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.me()
  }

  onClickHandler(){
    this.title = 'facebook'
  }

  changeTextHandler(event: Event) {
    this.text = (event.currentTarget as HTMLInputElement).value
  }
}
