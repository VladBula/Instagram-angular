import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Address} from "../parent.component";

export interface Grades {
  math: number
  physics: number
}

@Component({
  selector: 'inst-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  name = 'A'


  @Input() surnameProps?: string
  @Input() address?: Address
  @Output() sendGradeEvent = new EventEmitter<Grades>()

  sendGrade(){
    const math = 5
    const physics = 4

    this.sendGradeEvent.emit({math, physics})
  }
}

