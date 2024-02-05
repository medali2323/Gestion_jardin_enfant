import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(){
    let users:any=[]
    let username=localStorage.getItem("username")

    this.loggedUser = localStorage.getItem('token');
    console.log(this.loggedUser)
    if(this.loggedUser!=""){
      this.authServise.gettalluser().subscribe(res => {
        users=res
        let i=0
        while (users[i]["username"]!=username) {
          i++
        }
      if (users[i]["username"]==username) {
        console.log(users[i])
         if (users[i]["is_superuser"]== true) {
          this.role=["ADMIN"]
       this.route.navigate([''])   
      
        }
        else if (users[i]["is_ens"]== true) {
          this.role=["ENS"]
          this.route.navigate(['maitresse/dashboard'])
      
        }
        else if (users[i]["is_parent"]== true) {
          this.role=["parent"]
          this.route.navigate(['parent/dashboard'])
      
        }
      
      else if (users[i]["is_staff"]== true) {
          this.role=["st"]
          this.route.navigate([''])
      
        }
      }
      })
    }

  }
  tita:string="assets/img/tita.jpg"
  s:string
r:any ={
  username:'',
  password:''
};
constructor(private authServise:DirecteurService,private route:Router) { }

  private t;
  isloggedIn=false
  loggedUser:string
  role:any=[]
login(){
  if(this.r.username=="" ||this.r.password=="" ){
          this.s="الرجاء تعمير المعطيات"

  }else
  {
    this.authServise.login(this.r).subscribe(res => {
      this.isloggedIn=true
    
    console.log(res)
    this.t = res['token'];
    localStorage.setItem('token',this.t)
    
    localStorage.setItem('isloggedIn',String(this.isloggedIn)); 
    localStorage.setItem('username',this.r.username)
    let users:any=[]
    let username=this.r["username"]
    console.log(username)
    this.authServise.gettalluser().subscribe(res => {
      users=res
      let i=0
      while (users[i]["username"]!=username) {
        i++
      }
    if (users[i]["username"]==username) {
      
      console.log(users[i])
       if (users[i]["is_superuser"]== true) {
        this.role=["ADMIN"]
     this.route.navigate([''])   
    
      }
      else if (users[i]["is_ens"]== true) {
        this.role=["ENS"]
        this.route.navigate(['maitresse/dashboard'])
    
      }
      else if (users[i]["is_parent"]== true) {
        this.role=["parent"]
        this.route.navigate(['parent/dashboard'])
    
      }
    
    else if (users[i]["is_staff"]== true) {
        this.role=["st"]
        this.route.navigate([''])
    
      }
    }
    })
    }, err =>{
      this.s="تثبت من المعطيات"
    }
    );}
  
  console.log("data : " + this.r.username)

}
google(){
  this.authServise.google().subscribe(res => {
      console.log(res);
      
  }, err=>{
    console.log("8alta" + err.value.toString);
    
  })
}
}