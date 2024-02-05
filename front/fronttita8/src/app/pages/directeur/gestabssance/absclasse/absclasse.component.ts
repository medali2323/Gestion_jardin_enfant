import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-absclasse',
  templateUrl: './absclasse.component.html',
  styleUrls: ['./absclasse.component.css']
})
export class AbsclasseComponent implements OnInit {

  constructor(private route:Router,private enfService:DirecteurService) { }
tab:any=[]
classe:any=[]
annee:any=[]
ans:any
ens
enfs:any=[]
nbebc=0
x:number
  ngOnInit() {
    this.ann()
    
  }
  ann(){
    this.enfService.anneescolaire().subscribe(res => {
      this.annee=res
          this.ans=this.annee[this.annee.length-1]["id"]
          console.log(this.ans)  
          this.enfService.classe().subscribe(req=>{
            console.log(req)
            this.classe=req

            let j=0
           console.log(this.classe)
            for (let index = 0; index < this.classe.length; index++) {
            const element = this.classe[index];
          
          console.log()
          this.enfService.getallenfs().subscribe(res=>{
            this.enfs=res
            this.nbebc=0
          for (let index = 0; index < this.enfs.length; index++) {
            const e = this.enfs[index];
            if (e["classe"]==element["id"]) {
              this.nbebc++

            }
          }
          this.enfService.getmbyid(element["maitresse"]).subscribe(res=>{
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
          
          })
        
        
        }
  //      console.log(this.tab)
         
        })

    });
    console.log(this.tab)
   
}
detail(dataItem){
  this.route.navigate(["absanceclasse",dataItem.id])
}

}
