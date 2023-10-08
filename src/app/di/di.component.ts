import { Component, OnInit } from '@angular/core';
import {ValueService} from "../../services/value.service";
import {Observable} from "rxjs";

@Component({
  selector: 'inst-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.css']
})
export class DiComponent implements OnInit {

  value$ = new Observable()

  constructor(private valueService: ValueService) { }

  ngOnInit(): void {
    //Subscribe
    // this.valueService.value$.subscribe((data) => {
    //   this.value = data
    // })
    this.value$ = this.valueService.value$
  }

  decValue(){
    this.valueService.dec()
  }

}
