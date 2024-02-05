import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';
@Component({
  selector: 'app-printclasse',
  templateUrl: './printclasse.component.html',
  styleUrls: ['./printclasse.component.css']
})
export class PrintclasseComponent implements OnInit {
enfs:any=[]
timer:any
  constructor(private route: ActivatedRoute, private enfService: DirecteurService, private router: Router, private datePipe: DatePipe, public fb: FormBuilder) {}

  ngOnInit() {
    this.verif()
    this.enfbyclasse()
    this.getclasse()
   
  }
enfbyclasse(){
  let id = this.route.snapshot.paramMap.get("id")

  this.enfService.getallenfs().subscribe(res => {
    let enfs:any = []
    enfs=res
    this.enfs = enfs.filter(u => u.classe ==id)
if(enfs.length==0){
  this.router.navigate(["maitresse/absclassem",id])

}
else{
  this.timer=setInterval(()=>{
    this.print()
    },1000)
}
  })
}
classe:any={
  nom:''
}
ch=""
getclasse(){
  let id = this.route.snapshot.paramMap.get("id")

  this.enfService.classebyid(id).subscribe(res => {
    this.classe=res
    switch (this.classe.niveau) {
      case 1: 
        this.ch="ثلاثة سنوات"
        break;
    case 2:
      this.ch="اربعة سنوات"
      case 3:
        this.ch="خمسة سنوات"

      default:
        break;
    }
  })

}
print(){
  clearInterval(this.timer);
  window.print()
 window.close()
}
cc:any=[]
annee:any=[]
ans:any
verif(){
  let id = this.route.snapshot.paramMap.get("id")

  let users:any=[]
  let ms:any=[]
  let classes:any=[]
  this.enfService.anneescolaire().subscribe(res => {
    this.annee=res
        this.ans=this.annee[this.annee.length-1]["id"]
        console.log(this.ans)  
  this.enfService.gettalluser().subscribe(res=>{
    users=res
    let myUser = users.filter(u => u.username == localStorage.getItem("username"))[0]

    this.enfService.getm().subscribe(res1=>{
      ms=res1
      
      let mym =ms.filter(u => u.user == myUser.id)[0]

      this.enfService.classe().subscribe(res2=>{
classes=res2
console.log(classes)
let idc:any=[]
this.cc = classes.filter(u => u.maitresse == mym.id && u.anneescolaire==this.ans)
console.log(this.cc)
         this.cc.forEach(element => {
           idc.push(element.id)
         });
         console.log(id)
         console.log(idc)

console.log(idc.indexOf(id))
      if(id!=idc[0]){
     this.router.navigate(["maitresse/classe"])
      }
            })

    })
  })
})
}
}
