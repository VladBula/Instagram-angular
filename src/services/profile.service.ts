import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {User} from "./users.service";

export interface ProfileResponse {
  aboutMe?: string
  contacts: Contacts
  lookingForAJob: boolean
  lookingForAJobDescription?: string
  fullName: string
  userId: number
  photos: {
    small?: string
    large?: string
  }
}

interface Contacts {
  facebook?: any
  website?: any
  vk?: any
  twitter?: any
  instagram?: any
  youtube?: any
  github?: any
  mainLink?: any
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  getProfile(userId: number): Observable<ProfileResponse> {
    return this.http.get<ProfileResponse>(`${environment.socialUrl}/profile/${userId}`)
  }
}
