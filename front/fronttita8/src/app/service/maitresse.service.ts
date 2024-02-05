import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MaitresseService {

  constructor(private http:HttpClient, private route:Router) {}
  login(userdata){
    return this.http.post('http://127.0.0.1:8000/gestenf/api/mairesse/login/',userdata)
  }
  looggedin(){
    return !!localStorage.getItem('token')
  }
}
