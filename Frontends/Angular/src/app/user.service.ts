import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../models/user-model';
import { Options } from 'selenium-webdriver';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient) {

   }

  SignIn(user) {

   let url = '127.0.0.1:8080/user/signin' 

    this.http.post(url, user, httpOptions)
  }

  Insert(user) {

    let url = '127.0.0.1:8080/user/insert' 
 
     this.http.post(url, user, httpOptions)
   }

}
