import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { iif } from 'rxjs';
import { DirecteurService } from 'src/app/service/directeur.service';
import { TService } from 'src/app/service/t.service';

@Component({
  selector: 'app-afffecterclasse',
  templateUrl: './afffecterclasse.component.html',
  styleUrls: ['./afffecterclasse.component.css']
})
export class AfffecterclasseComponent implements OnInit {

  niveau:any=[]
  classe:any
  tab:any=[]
  niveauselected:any
classeselected:any=[]
annee:any=[]
ans:any
enf:any
b:false
classeText:any
    constructor(  private enfantservice:DirecteurService,private route:ActivatedRoute   ,private router:Router,private toast:TService) { }
  enfant:any
    ngOnInit(): void {
    this.change()
 
   this.ann()
   console.log(this.classe)
this.d()
let id=this.route.snapshot.paramMap.get("id")

  this.enfantservice.getbyid(id).subscribe(res=>{
    this.enfant=res
  })
    }
    ann(){
      this.enfantservice.anneescolaire().subscribe(res => {
        this.annee=res
            this.ans=this.annee[this.annee.length-1]["id"]
            console.log(this.ans)  

      });
    }
    change(){
      this.tab=[]

    this.enfantservice.niveau().subscribe(res=>{
  
  this.niveau=res
  console.log(this.niveau);
  
  /*
  console.log("hhh" +  this.niveau.length)
     for (let index = 0; index < this.niveau.length; index++) {
  this.tab[index]=this.niveau[index]["id"]
  
     }
     console.log(this.tab)
  */
  this.enfantservice.classe().subscribe(req=>{
  
  this.classeselected=req
  console.log(req);
  
  let j=0
  console.log(this.niveauselected)
    console.log(this.annee)
  for (let index = 0; index < this.classeselected.length; index++) {
    if(this.niveauselected==this.classeselected[index]["niveau"]["id"] && this.classeselected[index]["anneescolaire"]["id"]==this.ans ){
      this.tab[j]=this.classeselected[index]
      j++
    }

  }
     }), err => alert(" echek classe enf"+ err)
  
  
  
     }), err => alert(" echek niv enf"+ err)
  console.log(this.tab)
  
  }


  affecter(){
    let id=this.route.snapshot.paramMap.get("id")
    this.enfantservice.getbyid(id).subscribe(r=>{

      this.enf=r
      this.enfantservice.classebyid(this.classeText).subscribe(rc=>{

     
      console.log(this.classeText)
    this.enf["classe"]=rc
    console.log(this.enf)
    this.enfantservice.modif(id,this.enf).subscribe(res=>{
      this.toast.showSuccessToast("تم التسجيل بنجاح")
     // this.router.navigate(['listeenfants'])

      console.log(res)
      
      let b=this.route.snapshot.paramMap.get("b")
      if(b=="false")
      this.router.navigate(['listeenfants'])
      else
      if(b=="true")
      this.router.navigate(['choixregime',id,true])

    
       });
    });
  })

  
  }

  d(){
    /*
    let id=this.route.snapshot.paramMap.get("id")
    this.enfantservice.getbyid(id).subscribe(res=>{

        this.enfantservice.classebyid(res["classe"]).subscribe(rc=>{
          this.enfantservice.niveaubyid(rc["niveau"]).subscribe(rn=>{
            console.log(rn)
           this.niveauselected=rn["id"]
           this.classeText=res["classe"]
           console.log(this.classeText)

         })
       })
    }) 
    */
   
    let id = this.route.snapshot.paramMap.get("id")
    this.enfantservice.getbyid(id).subscribe(res => {

      this.enfantservice.classebyid(res["classe"]).subscribe(rc => {
        this.enfantservice.niveaubyid(rc["niveau"]).subscribe(rn => {
          this.niveauselected = rc["niveau"]
          this.classeText = res["classe"]
          this.enfantservice.classe().subscribe(req => {
          
            this.classeselected = req
            let j = 0
            this.tab = []
            for (let index = 0; index < this.classeselected.length; index++) {
              if (this.niveauselected == this.classeselected[index]["niveau"] && this.classeselected[index]["anneescolaire"] == this.ans) {
                this.tab[j] = this.classeselected[index]
                j++
              }
    
            }
          }), err => alert(" echek classe enf" + err)

          this.enfantservice.niveau().subscribe(res => {
            this.niveau = res
          })
        })
      })
    })
    
  }
  }
   