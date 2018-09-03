import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from '../../models/user-model'
import { UserService } from '../user.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() user: UserModel;

  constructor(private userService: UserService) {

    this.user = new UserModel()

  }

  save() {

    this.userService.Insert(this.user)
  
  }

  ngOnInit() {
  }

}
