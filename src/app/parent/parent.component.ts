import {Component, OnInit} from '@angular/core';
import {Grades} from "./child/child.component";

export interface Address {
  city: string,
  street: string
}

export interface WeekGrade {
  id: number,
  gradeItem: number
}

export interface Lesson {
  id: number
  title: string
  template: string
  weekGrades: WeekGrade[]
}

@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  isLoading = true
  name = 'V'
  surname = 'B'
  grades?: string[] = []
  address: Address = {
    city: 'Minsk',
    street: 'Levkova'
  }

  lessons: Lesson[] = [
    {
      id: 0,
      title: "eng",
      template: "bold",
      weekGrades: [{
        id: 0,
        gradeItem: 4
      },
        {
          id: 1,
          gradeItem: 3
        },
        {
          id: 2,
          gradeItem: 5
        },
      ]
    },
    {
      id: 0,
      title: "bel",
      template: "italic",
      weekGrades: [{
        id: 0,
        gradeItem: 2
      },
        {
          id: 1,
          gradeItem: 2
        },
        {
          id: 2,
          gradeItem: 3
        },
      ]
    },

  ]

  constructor() {
    setTimeout(()=>{
      this.isLoading = false
    },3000)


  }

  getGrade(value: string) {
    this.grades?.push(value)
    console.log(this.grades)
  }
}
