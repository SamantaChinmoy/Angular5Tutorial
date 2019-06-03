import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private signupservice: SignupService) { }

  ngOnInit() {
  }

  onFormSubmit(Model) {
    console.log(Model);
    var that = this;
    this.signupservice.logIn().subscribe(data => {
        var user = data.filter(value => value["email"] === Model.email && value["password"] === Model.password); 
        if(user.length > 0){ 
        console.log(data);
        localStorage.setItem('email', Model.email);
        this.router.navigateByUrl('/user');
        }
    },error => {

    })
  }

}
