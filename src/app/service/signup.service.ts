import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from "@angular/http";
import {User} from "../models/user";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class SignupService {
  private url = "https://sampledata-42db.restdb.io/rest/fusion";
  constructor(private http: Http) { }
  signUP(user: User) {
    let body = JSON.stringify(user);
    console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/json' , 'x-apikey': '5cecbbf55f86251ddebe1b32'});
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url, body, options)
      .map((response: Response) => { })
      //.map(res =>  res.json().data)
      .catch(this.handleError);
  }
  logIn() {
    let headers = new Headers({ 'Content-Type': 'application/json' , 'x-apikey': '5cecbbf55f86251ddebe1b32'});
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url, options)
      .map(res =>  res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().errorMessage || 'Server Error');
  }
}