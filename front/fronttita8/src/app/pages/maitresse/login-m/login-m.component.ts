import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaitresseService } from 'src/app/service/maitresse.service';

@Component({
  selector: 'app-login-m',
  templateUrl: './login-m.component.html',
  styleUrls: ['./login-m.component.css']
})
export class LoginMComponent implements OnInit {

  ngOnInit(){
    this.loggedUser = localStorage.getItem('token');
    console.log(this.loggedUser)
   if(this.loggedUser!=null){
      this.route.navigate(['maitresse/dashboard'])
    }
    

  }
  tita:string="assets/img/tita.jpg"
r:any ={
  username:'',
  password:''
};
constructor(private MaitresseService:MaitresseService,private route:Router) { }

  private t;
  isloggedIn=false
  loggedUser:string
login(){
  console.log("data : " + this.r.username)
this.MaitresseService.login(this.r).subscribe(res => {
  this.isloggedIn=true

console.log(res)
this.route.navigate(['maitresse/dashboard']);
this.t = res['token'];
localStorage.setItem('token',this.t)
localStorage.setItem('isloggedIn',String(this.isloggedIn)); 

}, err =>{}
);
}
}

