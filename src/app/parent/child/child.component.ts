import {Component, Input, OnInit} from '@angular/core';
import {Address} from "../parent.component";

@Component({
  selector: 'inst-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  name = 'A'

  @Input() surnameProps?: string
  @Input() address?: Address
}

