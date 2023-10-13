import {Component, OnInit} from '@angular/core';
import {User, UsersService} from "../../../../services/users.service";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'inst-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$!: Observable<User[]>

  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(page: number = 1) {
    this.users$ = this.usersService.getUsers(page ? page : 1)
  }

  nextUsersHandler() {
    const page = Number(this.route.snapshot.queryParamMap.get('page'))
    const nextPage = page ? page + 1 : 2

    this.router.navigateByUrl(`/users?page=${nextPage}`, {skipLocationChange: true})
      .then(() => {
        this.getUsers(nextPage)
      })
  }
}
