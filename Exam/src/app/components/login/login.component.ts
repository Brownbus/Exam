import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/User';
import { ExampleService } from 'src/app/services/example.service';


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

  constructor(private formBuilder: FormBuilder,
    private authSvc: AuthenticationService,
    private exampleSvc: ExampleService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get getLoginInfo(){
   return this.loginForm.controls
  }

  onSubmit(): void{
    const {username, password} = this.loginForm.value
    this.authSvc.authenticateUser(username, password).subscribe((user: User) => {
      console.log(user)
      localStorage.setItem('authToken', user.authToken)
      this.displayUser(user)
    })
  }

  displayUser(userInfo: User){
    this.loggedInUser = userInfo
  }

  sendExampleRequest(){
    const authToken = localStorage.getItem('authToken');
    this.exampleSvc.exampleRequest('queryParam', 'queryString', authToken).subscribe((response: any) => {
      this.responseToQueryString = response.queryString;
      this.responseToQueryParam = response.queryParam;
    })
  }
}
