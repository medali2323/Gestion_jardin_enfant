import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-affecterclasse',
  templateUrl: './affecterclasse.component.html',
  styleUrls: ['./affecterclasse.component.css']
})
export class AffecterclasseComponent implements OnInit {

  
  niveau:any=[]
  classe:any
  tab:any=[]
  niveauselected:any
classeselected:any=[]
annee:any=[]
ans:any
enf:any
ens:any
    constructor(  private enfantservice:DirecteurService,private route:ActivatedRoute) { }
  
    ngOnInit(): void {
    this.change()
  //  this.getclasse()
   // this.xxx()
   // this.aaa()
   this.ann()
   console.log(this.classe)

  
    }
    ann(){
      this.enfantservice.anneescolaire().subscribe(res => {
        this.annee=res
            this.ans=this.annee[this.annee.length-1]["id"]
            console.log(this.ans)  

      });
    }
    change(){
    this.enfantservice.niveau().subscribe(res=>{
  
  this.niveau=res
  /*
  console.log("hhh" +  this.niveau.length)
     for (let index = 0; index < this.niveau.length; index++) {
  this.tab[index]=this.niveau[index]["id"]
  
     }
     console.log(this.tab)
  */
  this.enfantservice.classe().subscribe(req=>{
  
  this.classeselected=req
  let j=0
  console.log(this.niveauselected)
    console.log(this.annee)
  for (let index = 0; index < this.classeselected.length; index++) {
    if(this.niveauselected==this.classeselected[index]["niveau"] && this.classeselected[index]["anneescolaire"]==this.ans ){
      this.tab[j]=this.classeselected[index]
      j++
    }

  }
     }), err => alert(" echek classe enf"+ err)
  
  
  
     }), err => alert(" echek niv enf"+ err)
  console.log(this.tab)
  
  }
  getclasse(){
    this.enfantservice.classe().subscribe(res=>{
  
  this.classeselected=res
  for (let index = 0; index < this.classeselected.length; index++) {
    this.tab[index]=this.niveau[index]["id"]
    console.log("this.tab[index]")
  }
  
  console.log(res)
  
     }), err => alert(" echek classe enf"+ err)
  }
  xxx(){
    console.log("hhh" +  this.niveau.length)
     for (let index = 0; index < this.niveau.length; index++) {
  this.tab[index]=this.niveau[index]["id"]
  console.log("this.tab[index]")
     }
  
  }
  aaa(){
    let id=this.route.snapshot.paramMap.get("id")
    console.log("id mtaa enf"+id)
  }
  affecter(){
    let id=this.route.snapshot.paramMap.get("id")
    console.log(this.classe)
    this.enfantservice.classebyid(this.classe).subscribe(res=>{
      this.ens=res
      this.ens["maitresse"]=id
      this.enfantservice.modifclasse(this.classe,this.ens).subscribe(r=>{
        console.log(r)
      });
    });
  
    


  
  }
  }
   