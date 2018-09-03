import { Component, OnInit, Input } from '@angular/core';
import {UserModel} from '../../models/userModel'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() user: UserModel;

  constructor() { }

  ngOnInit() {
  }

}
