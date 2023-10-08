import { Component, OnInit } from '@angular/core';
import {ValueService} from "../../services/value.service";

@Component({
  selector: 'inst-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.css']
})
export class DiComponent implements OnInit {

  value = 0

  constructor(private valueService: ValueService) { }

  ngOnInit(): void {
    //Subscribe
    this.valueService.value$.subscribe((data) => {
      this.value = data
    })
  }

  decValue(){
    this.valueService.dec()
  }

}
