import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inst-test7',
  template: `
  <h1 class="title">Test 7</h1>
  `,
  styles: [`
  .title{
    color: aqua;
  }
  `]
})
export class Test7Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
