import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-affectermaitresse',
  templateUrl: './affectermaitresse.component.html',
  styleUrls: ['./affectermaitresse.component.css']
})
export class AffectermaitresseComponent implements OnInit {
classe:any=[]
mait:any=[]
m:any
mText:any
m1:any=[]
cs:any=[]
m2:any=[]
maitress:any=[]
ans:any
annee:any=[]
  constructor(  private enfantservice:DirecteurService,private route:ActivatedRoute ,private router:Router) { }
  classeeee:any
  ngOnInit() {
    this.lm()
    let id=this.route.snapshot.paramMap.get("id")
    this.enfantservice.classebyid(id).subscribe(res=>{
      this.classeeee=res
    })
      }
  lm(){
    let cls:any=[]

    this.enfantservice.anneescolaire().subscribe(res => {
      this.annee=res
          this.ans=this.annee[this.annee.length-1]["id"]
          console.log(this.ans)  
          this.enfantservice.classe().subscribe(req=>{

            this.enfantservice.getm().subscribe(r=>{
              console.log(r)
              this.mait=r
              let i=0
              this.mait.forEach(element => {
               if (element["actif"]==true) {
                   this.m1[i]=element
                     i++
                                            }
                              });
                              console.log(this.m1)
                              this.m2=[]

                              this.enfantservice.clubs() .subscribe(res=>{
                                 cls=res
                                 cls.forEach(element => {
                                   this.m2.push(element.maitresse)
                                 });
              this.enfantservice.classe().subscribe(res=>{
                  this.cs=res
                  console.log(this.cs)
                  this.cs.forEach(element => {
                    if(element.anneescolaire==this.ans){
                      this.classe.push(element)
                    }
                  });
                  let x=[]
                  this.classe.forEach(elt => {
                     this.m2.push(elt.maitresse)    
        
                  });
                  this.m1.forEach(element => {
                    if(this.m2.indexOf(element.id) == -1 )
        
                    {
                      this.maitress.push(element)
        
                    }
                  });
                  console.log(this.m2)
                  console.log(this.maitress)
        
              })
            })
            });
            let id=this.route.snapshot.paramMap.get("id")
        
            let m:any
            this.enfantservice.classebyid(id).subscribe(r=>{
              this.mText=r["maitresse"]
              console.log(this.mText)
              this.enfantservice.getmbyid(this.mText).subscribe(res=>{
                m=res
                this.maitress.push(m)
                console.log(this.maitress)
      
              })
            });
            
          })
    })
 
}
  affecter(){
    let id=this.route.snapshot.paramMap.get("id")
    this.enfantservice.classebyid(id).subscribe(res=>{
      this.classe=res
      this.classe["maitresse"]=this.mText
      this.enfantservice.modifclasse(id,this.classe).subscribe(r=>{
        console.log(r)
        this.router.navigate(['gestclasse'])
      });
    });
  
    


  
  }
}
