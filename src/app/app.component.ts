import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inst';
  text = ''

  onClickHandler(){
    this.title = 'facebook'
  }

  changeTextHandler(event: Event) {
    this.text = (event.currentTarget as HTMLInputElement).value
  }
}
