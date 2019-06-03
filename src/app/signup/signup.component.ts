import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SignupService } from '../service/signup.service';
import { User } from '../models/user';
import * as data from './city.json';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = new User();
  loading : boolean=false;
  stateList: string[];
  cityList: string[];
  Data: any[];
constructor(private router: Router, private signupservice: SignupService) { 
  console.log(data);
}

  ngOnInit() {
    this.Data = JSON.parse(JSON.stringify(data));
    this.stateList = this.Data.map( c => c["state"]).filter( (value,index,self) => self.indexOf(value) === index);
  }
  selectCity(state){
    console.log(event);
    this.cityList = this.Data.filter( value=> value["state"] === state).map( c => c["name"]);
    console.log(this.cityList);
  }

  onFormSubmit() {
    console.log(this.user);
    this.loading = true;
    this.signupservice.signUP(this.user).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/');
    },error => {
      console.log(error);
    })
  }

}
