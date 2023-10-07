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
  grade = ''


  @Input() surnameProps?: string
  @Input() address?: Address
  @Output() sendGradeEvent = new EventEmitter<string>()

  sendGrade() {
    this.sendGradeEvent.emit(this.grade)
  }
}

