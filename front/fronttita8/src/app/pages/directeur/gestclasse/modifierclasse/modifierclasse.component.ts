import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';
import { TService } from 'src/app/service/t.service';

@Component({
  selector: 'app-modifierclasse',
  templateUrl: './modifierclasse.component.html',
  styleUrls: ['./modifierclasse.component.css']
})
export class ModifierclasseComponent implements OnInit {
  constructor(private router:Router,private enfService:DirecteurService,private route:ActivatedRoute,private t:TService) { }

  ngOnInit() {
    this.change()
    this.getclasse()
  }
  niveau:any
  anneescolaire:any
  classe:any={
   
    
  }
  anneeText: ""
  nomText:""
  nvsText:""

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
  data:any={
    nomText:'',
    nvsText:'',
    anneeText:''
  }
  c:any
  getclasse(){
    let id=this.route.snapshot.paramMap.get("id")
    this.enfService.classebyid(id).subscribe(re=>{
      this.c=re
      console.log(re)
      this.nomText=re["nom"]
      this.nvsText=re["niveau"]["id"]
      this.anneeText=re["anneescolaire"]["id"]
//
this.data.nomText=re["nom"]
this.data.nvsText=re["niveau_id"]
this.data.anneeText=re["anneescolaire_id"]

console.log(this.data)
    })
  }
  ajtclasse(){
    let annee:any=[]
    let ans:any
    this.enfService.anneescolaire().subscribe(res => {
      annee=res
      let idd=this.route.snapshot.paramMap.get("id")
      this.enfService.niveaubyid(this.nvsText).subscribe(ren=>{
       
  
  console.log(this.data)
      this.enfService.classebyid(idd).subscribe(re=>{
        
        this.c=re

        console.log(re)
        ans=annee[annee.length-1]
        this.classe.nom=this.nomText
        this.classe.niveau=ren

        this.classe.anneescolaire=ans
    
        this.classe.id=this.c.id
    
       
    console.log(this.c)
    console.log(this.classe);
    
let tt:boolean=false
    console.log(this.classe)
    let id=this.route.snapshot.paramMap.get("id")
    let ens:any=[]
    this.enfService.classe().subscribe(res=>{
      ens=res
      console.log(ens)
if(this.classe.nom==this.c.nom &&  this.classe.niveau==this.c.niveau && this.classe.anneescolaire==this.c.anneescolaire){
tt=true
}
if(!tt){
  let myUser = ens.filter(u => u.anneescolaire == this.classe.anneescolaire && u.niveau == this.classe.niveau  && u.nom == this.classe.nom )
  console.log(myUser)
  if( myUser.length>0){
    this.t.showErrorToast("هذا القسم موجود")
  }      else{
  this.enfService.modifclasse(id,this.classe).subscribe(res=>{
 this.router.navigate(["gestclasse"])
    console.log(res)
  }), err => alert(" echek register enf"+ err)
}
}
  else{
    this.enfService.modifclasse(id,this.classe).subscribe(res=>{
   this.router.navigate(["gestclasse"])
      console.log(res)
    }), err => alert(" echek register enf"+ err)
  
}
})
     
  })
})
    
})
    }
}
