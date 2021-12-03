import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { LoginService } from './../../services/login.service';

@Component({
  selector: 'pages-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  loginForm?: FormGroup;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null),
    });
  }

  onSubmit() {
    let email = this.loginForm?.controls['email'].value;
    let password = this.loginForm?.controls['password'].value;

    console.log(email, password);
    this.loginService.logUser(email, password);
  }
  
}
