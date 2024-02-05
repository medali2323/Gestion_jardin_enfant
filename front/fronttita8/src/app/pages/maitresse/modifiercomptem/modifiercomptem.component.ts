import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';@Component({
  selector: 'app-modifiercomptem',
  templateUrl: './modifiercomptem.component.html',
  styleUrls: ['./modifiercomptem.component.css']
})
export class ModifiercomptemComponent implements OnInit {
  private id=localStorage.getItem("id")

  constructor(private enfservice:DirecteurService,private router:Router) { }
  enfsp:any=[]
  info:any
  username:any
  ngOnInit() {
   // this.aaa()
   this.username=localStorage.getItem("username")
this.username=this.username[0]+"******"+this.username[7]
  }
  r:any={
    old_password:"",
    new_password:""
  }

s:string
rus:string
modifierpass(){
  let aaa:any=[]
  let d :any
  this.enfservice.gettinfuser().subscribe(res=>{
aaa=res
console.log(this.info)
aaa.forEach(elt2 => {
  if(elt2.username==this.username){
     d=elt2
  }
});
console.log(d)

console.log(this.r)
this.enfservice.mdfp(this.r).subscribe(res=>{
  this.rus="  تم التغير بنجاح"
  this.router.navigate(["/maitresse/dashboard"])
console.log(res)

let data={}
data["id"]=d.id
data["username"]=d.username
data["password"]=this.r.new_password
this.enfservice.putuser2(d.id,data).subscribe(res=>{})
  })

},err =>{
  console.log(err)
  this.s="تثبت من المعطيات"
}

)


}
}
