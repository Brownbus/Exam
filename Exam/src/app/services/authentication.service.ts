import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) { }
  
  authenticateUser(username: string, password: string): Observable<User>{
    const header = new HttpHeaders({username, password, 'content-type':'application/json'})
    return this.http.get<User>('http://localhost:8080/auth', {headers: header})
  }
}
