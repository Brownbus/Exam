import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  constructor(private http: HttpClient) { }

  exampleRequest(queryParam, queryString, authToken){
    const authorizationHeader = new HttpHeaders({'authorization':`Bearer ${authToken}`, 'content-type': 'application/json'})
    return this.http.get(`http://localhost:8080/api/queryParam?queryString=${queryString}`, {headers: authorizationHeader})
  }
}
