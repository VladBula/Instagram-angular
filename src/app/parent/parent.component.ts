import {Component, OnInit} from '@angular/core';
import {Grades} from "./child/child.component";

export interface Address {
  city:string,
  street:string
}

@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  name = 'V'
  surname = 'B'
  grades?: string[] = []
  address: Address = {
    city: 'Minsk',
    street: 'Levkova'
  }

  getGrade(value: string) {
    this.grades?.push(value)
    console.log(this.grades)
  }
}
