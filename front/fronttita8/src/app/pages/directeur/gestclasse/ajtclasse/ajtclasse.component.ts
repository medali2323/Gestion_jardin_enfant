import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';
import { TService } from 'src/app/service/t.service';

@Component({
  selector: 'app-ajtclasse',
  templateUrl: './ajtclasse.component.html',
  styleUrls: ['./ajtclasse.component.css']
})
export class AjtclasseComponent implements OnInit {
ans:any
  constructor(private route:Router,private enfService:DirecteurService,private t:TService) { }

  ngOnInit() {
    this.change()
    
  }
  niveau:any
  anneescolaire:any
  classe:any={
  
    
  }
  anneeText: ""
  nomText:""
  nvsText:""
  NV:any

  change(){
    this.enfService.niveau().subscribe(res=>{
  
  this.niveau=res
  /*
  console.log("hhh" +  this.niveau.length)
     for (let index = 0; index < this.niveau.length; index++) {
  this.tab[index]=this.niveau[index]["id"]
  
     }
     console.log(this.tab)
  */

  
  
     }), err => alert(" echek niv enf"+ err)

  this.enfService.anneescolaire().subscribe(res=>{
  
    this.anneescolaire=res
    console.log(res)
  })
  }
  ajtclasse(){
    let annee:any=[]
    let ans:any
    
    this.enfService.anneescolaire().subscribe(res => {
      annee=res
          this.ans=annee[annee.length-1]
          console.log(this.ans)  
          this.classe.nom=this.nomText
    console.log(this.nvsText);
    this.enfService.niveaubyid(this.nvsText).subscribe(resniv => {
this.NV=resniv
console.log(this.NV);

      this.classe.niveau=this.NV
    //  this.classe.maitresse=null
    //appell objet niveau by id
    this.classe.anneescolaire=this.ans
    //appell objet anneescolaire by id


    console.log(this.classe)
    let cs:any=[]
    this.enfService.classe().subscribe(res=>{
        cs=res
        let myUser = cs.filter(u => u.anneescolaire == this.classe.anneescolaire && u.niveau == this.classe.niveau  && u.nom == this.classe.nom )
      if(myUser.length>0){
        this.t.showErrorToast("هذا القسم موجود")
      }else{
        this.enfService.ajtclasse(this.classe).subscribe(res=>{
        
          this.route.navigate(["gestclasse"])
             console.log(res)
           }), err => alert(" echek register enf"+ err)
      }
    })
   
    })
  })
    
    }
}
