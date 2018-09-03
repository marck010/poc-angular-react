import { Component, OnInit, Input } from '@angular/core';
import {UserModel} from '../../models/userModel'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() user: UserModel;
  
  constructor() {

  }

  SignIn() {

  }
  
  ngOnInit() {

  }

}

