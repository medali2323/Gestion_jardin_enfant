import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-modifiercompte',
  templateUrl: './modifiercompte.component.html',
  styleUrls: ['./modifiercompte.component.css']
})
export class ModifiercompteComponent implements OnInit {
  private id=localStorage.getItem("id")

  constructor(private enfservice:DirecteurService,private router:Router) { }
  enfsp:any=[]
  info:any
  username:any
  ngOnInit() {
    this.aaa()
  
  }
  r:any={
    old_password:"",
    new_password:""
  }
aaa(){
  this.username=localStorage.getItem("username")
  let enfs:any=[]
  this.enfservice.getallenfs().subscribe(res=>{
  enfs=res
  console.log(enfs)
  
  enfs.forEach(element => {
    if(element.userparent ==this.id){
      this.enfsp.push(element)
    }
  });
  if( this.enfsp.length>0){
this.info=this.enfsp[0].Nompere

  }
})
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
  this.router.navigate(["parent/dashboard"])
console.log(res)

let data={}
data["id"]=d.id
data["username"]=d.username
data["password"]=this.r.new_password
this.enfservice.putuser2(d.id,data).subscribe(res=>{})
  })

},err =>{
  this.s="تثبت من المعطيات"
}

)


}
}
