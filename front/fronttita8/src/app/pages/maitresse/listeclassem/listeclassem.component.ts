import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-listeclassem',
  templateUrl: './listeclassem.component.html',
  styleUrls: ['./listeclassem.component.css']
})
export class ListeclassemComponent implements OnInit {
  tab:any=[]
  classe:any=[]
  annee:any=[]
  ans:any
  ens
  enfs:any=[]
  nbebc=0
  x:number
  constructor(private enfservice:DirecteurService,private router:Router) { }
nv:any
  ngOnInit() {
this.classeformait()
  }
  ann(){
    let users:any=[]
    let ms:any=[]
    this.enfservice.anneescolaire().subscribe(res => {
      this.annee=res
          this.ans=this.annee[this.annee.length-1]["id"]
          console.log(this.ans)  
          
          this.enfservice.classe().subscribe(req=>{
            console.log(req)
            this.classe=req

            let j=0
           console.log(this.classe)
            for (let index = 0; index < this.classe.length; index++) {
            const element = this.classe[index];
          
          console.log()
          this.enfservice.getallenfs().subscribe(res=>{
            this.enfs=res
            this.nbebc=0
          for (let index = 0; index < this.enfs.length; index++) {
            const e = this.enfs[index];
            if (e["classe"]==element["id"]) {
              this.nbebc++

            }
          }
          this.enfservice.gettalluser().subscribe(res=>{
            users=res
            let myUser = users.filter(u => u.username == localStorage.getItem("username"))[0]
        
            this.enfservice.getm().subscribe(res1=>{
              ms=res1
              
              let mym = ms.filter(u => u.user == myUser.id)[0]
              if(element["maitresse"]=mym.id){
                this.enfservice.getmbyid(element["maitresse"]).subscribe(res=>{
                  this.ens=res["prenom"] + " " + res["nom"]
                  element["mait"]=this.ens
                  console.log(element["mait"])
      
                  if (  element["mait"]==null) {
                    this.ens="هدا القسم ليس له معلم"
                  }
                })
                if(element["anneescolaire"]==this.ans){
                  this.tab[j]=element
                  this.tab[j]["nb"]=this.nbebc
                  this.tab[j]["mait"]=this.ens
      
                  if(this.tab[j]["niveau"]==1)
                  this.tab[j]["niveau"]="ثلاثة سنوات "
                  if(this.tab[j]["niveau"]==2)
                  this.tab[j]["niveau"]="اربعة سنوات "
                  if(this.tab[j]["niveau"]==3)
                  this.tab[j]["niveau"]="خمسة سنوات "
                  if (this.tab[j]["mait"]==null) 
                  {
                    this.tab[j]["mait"]="هدا القسم ليس له معلم"
                    this.tab[j]["mm"]="n"
                  }
                  else
                  this.tab[j]["mm"]="nn"
      
                
                  j++
                }


              }
          
            })
          })
         
          
          })
        
        
        }
  //      console.log(this.tab)
         
        })

    });
    console.log(this.tab)
   
}
cc:any=[]
t:boolean=false
classeformait(){
  let users:any=[]
  let ms:any=[]
  let classes:any=[]
  this.enfservice.anneescolaire().subscribe(res => {
    this.annee=res
        this.ans=this.annee[this.annee.length-1]["id"]
        console.log(this.ans)  
  this.enfservice.gettalluser().subscribe(res=>{
    users=res
    let myUser = users.filter(u => u.username == localStorage.getItem("username"))[0]

    this.enfservice.getm().subscribe(res1=>{
      ms=res1
      
      let mym = ms.filter(u => u.user == myUser.id)[0]

      this.enfservice.classe().subscribe(res2=>{
classes=res2
console.log(classes)

        this.cc = classes.filter(u => u.maitresse == mym.id && u.anneescolaire==this.ans)
     console.log(this.cc)
     if(this.cc.length==0){
       this.t=true
     }
      //  this.classe=c
        console.log(this.classe)
        let n
          if(this.classe.niveau==1){
            console.log(this.classe.niveau)
            this.classe.niveau="ثلاثة سنوات"

          }
          if(this.classe["niveau"]==2){
            console.log(this.classe.niveau)

            this.classe.niveau="اربعة سنوات"

          }
          if(this.classe["niveau"]==3){
            console.log(this.classe.niveau)

            this.classe.niveau="خمسة سنوات"

          }
        console.log(this.classe)
        console.log(this.classe.niveau)

            })

    })
  })
})


}
detail(d){
  this.router.navigate(["maitresse/absclassem/",d.id])
}
}
