


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TaskModel } from '../models/task-model';
import { Options } from 'selenium-webdriver';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  Insert(task) {

    let url = '127.0.0.1:8080/todo/insert' 
 
    this.http.post(url, task, httpOptions)

   }

  Update(task) {

   let url = '127.0.0.1:8080/todo/update' 

    this.http.put(url, task, httpOptions)
  }


}
