import {Component, OnInit} from '@angular/core';

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
  address: Address = {
    city: 'Minsk',
    street: 'Levkova'
  }
}
