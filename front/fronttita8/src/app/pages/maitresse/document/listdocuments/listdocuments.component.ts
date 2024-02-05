import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-listdocuments',
  templateUrl: './listdocuments.component.html',
  styleUrls: ['./listdocuments.component.css']
})
export class ListdocumentsComponent implements OnInit {

  documents:any=[]
  constructor(private enfService:DirecteurService, private router:Router) {  }

  ngOnInit() {
    this.classeformait()
  }
  cc:any=[]
  tab:any=[]
  classe:any=[]
  annee:any=[]
  ans:any
  ens
  enfs:any=[]
  nbebc=0
  x:number
  classeformait(){
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
        
        let mym = ms.filter(u => u.user == myUser.id)[0]
  
        this.enfService.classe().subscribe(res2=>{
  classes=res2
  console.log(classes)
  
          this.cc = classes.filter(u => u.maitresse == mym.id && u.anneescolaire==this.ans)[0]
       console.log(this.cc)
        //  this.classe=c
          console.log(this.cc)
          let n
       
       
  
              })
  
      })
    })
  })
  
  
  }
}
