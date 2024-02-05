import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-detailclasse',
  templateUrl: './detailclasse.component.html',
  styleUrls: ['./detailclasse.component.css']
})
export class DetailclasseComponent implements OnInit {
claase:any={
  nom:''
}
enfs:any=[]
tab:any=[]
ens:any
  constructor(private route:ActivatedRoute,private enfService:DirecteurService,router:Router) {  }

  ngOnInit() {
    let id=this.route.snapshot.paramMap.get("id")
    
    this.detailclasse(id)
    this.enfsbyclaase()
    this.getclasse()
  }
  detailclasse(id){
    this.enfService.classebyid(id).subscribe(res => {
      console.log(res);
       this.claase=res
       this.enfService.getmbyid(res["maitresse"]).subscribe(rm=>{  
        this.ens=rm["prenom"] + " " + rm["nom"]
        res["mait"]=this.ens
        console.log(res["mait"])

        if (  res["maitresse"]==null) {
          this.ens="هدا القسم ليس له معلم"      
            console.log(this.ens)

        }
       })

      }, 
      );
  }
  nb:any
  enfsbyclaase(){
    this.enfService.getallenfs().subscribe(res => {
      this.enfs=res
      console.log(this.enfs)
      let j=0
    for (let index = 0; index < this.enfs.length; index++) {
      const element = this.enfs[index];
      let id=this.route.snapshot.paramMap.get("id")

      if(element["classe"]==id)
      {
        this.tab[j]=element
        console.log(this.tab)

        j++
      }
    }
    console.log(this.tab)
    this.nb=this.tab.length
    })
  }
  suppdelaclasse(dataItem){
    let enf:any={}
    this.enfService.getbyid(dataItem.id).subscribe(res => {
      enf=res
      enf.classe=null
      this.enfService.modif(dataItem.id,enf).subscribe(res => {
        window.location.reload();       })
    })

  }
  printclasse(){
    let id = this.route.snapshot.paramMap.get("id")

    window.open("printclasse/" +id +"/" )
  }
  ch=""
getclasse(){
  let id = this.route.snapshot.paramMap.get("id")

  this.enfService.classebyid(id).subscribe(res => {
    this.claase=res
    switch (this.claase.niveau) {
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
}
