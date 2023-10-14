import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../environments/environment";
import {User} from "./users.service";

interface MeResponse {
  data: {
    id: number
    login: string
    email: string
  }
  messages: string[]
  fieldErrors: string[]
  resultCode: number
}

enum ResultCodes {
  success = 0,
  error = 1
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false

  constructor(private http: HttpClient) {
  }

  me() {
    return this.http.get<MeResponse>(`${environment.socialUrl}/auth/me`)
      .subscribe(
        (res) => {
          if (res.resultCode === ResultCodes.success) {
            this.isAuth = true
          }
        }
      )
  }
}
