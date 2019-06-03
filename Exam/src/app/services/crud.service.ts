import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  constructor(private http: HttpClient) { }
  getRequest(username){
    return this.http.get(`http://localhost:8080/user/${username}`, {headers:{'content-type': 'application/json'}})
  };

  postRequest(newUser: User){
    return this.http.post(`http://localhost:8080/user`,newUser, {headers:{'content-type': 'application/json'}})
  };

  putRequest(updatedUser: User){
    return this.http.put(`http://localhost:8080/user`,updatedUser, {headers:{'content-type': 'application/json'}})
  };

  deleteRequest(username:string){
    return this.http.delete(`http://localhost:8080/user/${username}`, {headers:{'content-type': 'application/json'}})
  };
}
