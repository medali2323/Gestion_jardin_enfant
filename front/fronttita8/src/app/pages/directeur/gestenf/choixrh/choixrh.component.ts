import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-choixrh',
  templateUrl: './choixrh.component.html',
  styleUrls: ['./choixrh.component.css']
})
export class ChoixrhComponent implements OnInit {
 regimehoraires:any=[]
enf:any
classeText:any

  constructor(  private enfantservice:DirecteurService,private route:ActivatedRoute,private router:Router) { }
enfant:any={
  fn:''
}
  ngOnInit() {
    this.rh()
    this.d()
    let id=this.route.snapshot.paramMap.get("id")

  this.enfantservice.getbyid(id).subscribe(res=>{
    this.enfant=res
    console.log( this.enfant);
    
  })
  }
rh(){
  this.enfantservice.rh().subscribe(res=>{
    this.regimehoraires=res
    console.log(this.regimehoraires)

  })
  console.log(this.regimehoraires)
}
affecter(){
  let id=this.route.snapshot.paramMap.get("id")
  this.enfantservice.getbyid(id).subscribe(r=>{

  
    this.enfantservice.rhnyid(this.classeText).subscribe(rrh=>{

  this.enf=r
    console.log(this.classeText)
      




      this.enf.regimehoraire=rrh
      console.log(this.enf)
      this.enfantservice.modif(id,this.enf).subscribe(res=>{
        console.log(res)
        this.router.navigate(['listeenfants'])







    })
    
 

  });
  });



}
d(){
  let id=this.route.snapshot.paramMap.get("id")
  this.enfantservice.getbyid(id).subscribe(re=>{


         this.classeText=re["regimehoraire"]["id"]
         this.enf=re
         console.log(this.classeText)

       })

}
}