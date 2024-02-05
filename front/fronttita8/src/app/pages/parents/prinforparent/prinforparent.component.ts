import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-prinforparent',
  templateUrl: './prinforparent.component.html',
  styleUrls: ['./prinforparent.component.css']
})
export class PrinforparentComponent implements OnInit {
  l3:any=[]
  enf:any = {/*esm e champ fil base*/
    nom:"",
prenom:"",
datenessance:"",
etatmedical:"",
Nompere:"",
Nommere:"",
adresse:"",
profissionpere:"",
proffisionmere:"",
telpere:"",
telmere:"",
    
    
  }
  timer:any
  c:any={}
  classe:any
  constructor(private route:ActivatedRoute,private enfService:DirecteurService, private router:Router) {  }

  ngOnInit() {
    let id=this.route.snapshot.paramMap.get("id")
    this.verif()
 
    
  }
  print(){
            clearInterval(this.timer);
            window.print()
         // window.close()
  }
  detailenfant(id){
    this.enfService.getbyid(id).subscribe(res => {
     console.log(res);
      this.enf=res

     }, err => alert(" afficg enf echek"+ err)
     );
}
classeENF(){
 let id=this.route.snapshot.paramMap.get("id")

 this.enfService.getbyid(id).subscribe(res => {
    this.enf=res
    this.enfService.classebyid(this.enf["classe"]).subscribe(res => {
     this.classe=res
     this.c=""
     if (res["niveau"]==1) {
      this.c="ثلاث سنوات "+ res["nom"]
     } else
     if (res["niveau"]==2) {
       this.c="أربعة  سنوات "+ res["nom"]
      } else
      if (res["niveau"]==3) {
       this.c="خمسة سنوات  "+ res["nom"]
      } 
      console.log(this.c)
    }, err => this.c="ليس له قسم"

    );
   }  );

}
clubforenf(){
 let l:any=[]
 let l1:any=[] // l1 fih les id mtaa les club l mcherek fih l enfant
 let l2:any=[]// l2 fih les clubs l kil
 let id=this.route.snapshot.paramMap.get("id")

 this.enfService.clubsenf().subscribe(res => {
   l=res
   l.forEach(element => {
     if (element.enfant==id) {
       l1.push(element)
     }
   });
   this.enfService.clubs().subscribe(res => {
       l2=res
       l1.forEach(elt => {
         l2.forEach(e => {
           if (e.id==elt.club) {
             this.l3.push(e)
           }
         });
       });
           console.log(this.l3)
   })

})
}
verif(){
  let enfs:any=[]
  let enfsp:any=[]
let n=localStorage.getItem("id")
this.enfService.getallenfs().subscribe(res=>{
enfs=res
console.log(enfs)

enfs.forEach(element => {
if(element.userparent ==n){
  enfsp.push(element.id)
}
});
let id=this.route.snapshot.paramMap.get("id")

console.log(enfsp)
let myUser = enfsp.filter(u =>u==id)

if(myUser.length==0){
  this.router.navigate(["parent/dashboard"])
}
else{
  this.detailenfant(id)
    this.clubforenf()
    this.classeENF()
          this.timer=setInterval(()=>{
          this.print()
          },1000)
}
})
}
}
