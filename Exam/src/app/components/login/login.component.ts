import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/User';
import { ExampleService } from 'src/app/services/example.service';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loggedInUser: User;
  responseToQueryString: string;
  responseToQueryParam: string;
  crud: string = 'dummyUsername';
  dummyData: User = {
    username: 'dummyUsername',
    firstName: 'Legitfirstname',
    lastName: 'legitLastname',
    age: 21
  };
  displayed: any = this.dummyData;
  dummyDataUpdated: User = {
    username: 'updatedUsername',
    firstName: 'Legiterfirstname',
    lastName: 'legiterLastname',
    age: 52
  };
  constructor(
    private formBuilder: FormBuilder,
    private authSvc: AuthenticationService,
    private exampleSvc: ExampleService,
    private crudSvc: CrudService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get getLoginInfo() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    const { username, password } = this.loginForm.value;
    this.authSvc
      .authenticateUser(username, password)
      .subscribe((user: User) => {
        console.log(user);
        localStorage.setItem('authToken', user.authToken);
        this.displayUser(user);
      });
  }

  displayUser(userInfo: User) {
    this.loggedInUser = userInfo;
  }

  sendRequest(request: string) {
    switch (request) {
      case 'get':
        this.crudSvc[request + 'Request'](this.crud).subscribe((user: User) => {
          this.displayed = user;
        });
        break;
      case 'delete':
        this.crudSvc[request + 'Request'](this.crud).subscribe(error => {
          if (error) {
            alert(error.message);
          }
        });
        this.displayed = {};
        break;
      case 'post':
        this.crudSvc[request + 'Request']({
          ...this.dummyData,
          password: 'password'
        }).subscribe(response => {
          this.displayed = response;
          alert('succesful submission');
        });
        break;
      case 'put':
        this.crudSvc[request + 'Request']({
          ...this.dummyDataUpdated,
          password: 'password'
        }).subscribe(updatedUser => {
          this.displayed = updatedUser;
          console.log('succesful update');
          this.crud = updatedUser.username;
        });
        break;
      default:
        alert('Invalid request!');
        break;
    }
  }

  sendExampleRequest() {
    const authToken = localStorage.getItem('authToken');
    this.exampleSvc
      .exampleRequest('queryParam', 'queryString', authToken)
      .subscribe((response: any) => {
        this.responseToQueryString = response.queryString;
        this.responseToQueryParam = response.queryParam;
      });
  }
}
