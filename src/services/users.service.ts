import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {map, Observable} from "rxjs";

interface UsersResponse {
  items: User[]
  totalCount: number
}

export interface User {
  name: string
  id: number
  photos: {
    small: string
    large: string
  }
  followed: boolean
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private http:HttpClient) { }

  getUsers(page: number): Observable<User[]> {
    return this.http.get<UsersResponse>(`${environment.socialUrl}/users?page=${page}`)
      .pipe(
      map(el => el.items)
      )
  }
}
