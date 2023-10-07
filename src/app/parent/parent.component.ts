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
  math?: number
  physics?: number
  address: Address = {
    city: 'Minsk',
    street: 'Levkova'
  }

  getGrade(values: Grades) {
    this.math = values.math
    this.physics = values.physics
  }
}
