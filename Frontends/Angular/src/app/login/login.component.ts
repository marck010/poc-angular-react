import { Component, OnInit, Input } from '@angular/core';
import {UserModel} from '../../models/user-model'
import { UserService } from '../user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: UserModel ;
  
  constructor(private userService: UserService) {
    this.user = new UserModel()
  }

  SignIn() {

    this.userService.SignIn(this.user)
  
  }
  
  ngOnInit() {

  }

}

