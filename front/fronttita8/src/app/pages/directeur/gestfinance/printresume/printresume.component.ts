import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-printresume',
  templateUrl: './printresume.component.html',
  styleUrls: ['./printresume.component.css']
})
export class PrintresumeComponent implements OnInit {
  reglement2:any=[]
  charges2:any=[]
  nbc:any
  nbr:any=0.0
  m:any
  d1=this.route.snapshot.paramMap.get("d1")
 d2=this.route.snapshot.paramMap.get("d2")

  constructor(private route:ActivatedRoute,private router:Router,private enfService:DirecteurService) {}
timer:any
  ngOnInit() {
  this.resume()
  this.timer=setInterval(()=>{
    this.print()
   },5000)
  }
  
resume(){
  let charges:any=[]
  let reglement:any=[]
  let d1=this.route.snapshot.paramMap.get("d1")
  let d2=this.route.snapshot.paramMap.get("d2")
  this.enfService.reglement().subscribe(res=>{
    reglement=res
    console.log(reglement)
    reglement.forEach(element => {
      let x =new Date(Date.parse(element.datereglemaiment)).getTime();

      let y =new Date(Date.parse(d1)).getTime();
      let z =new Date(Date.parse(d2)).getTime();
      

      if(x>y  && x<z) {
        this.enfService.getbyid(element.enfant).subscribe(res=>{
            let enf:any=res
            element.enf=enf.fn
            if(element.moisreglemaiment!="الترسيم")
            element.moisreglemaiment="شهر  " +  element.moisreglemaiment
          this.reglement2.push(element)
this.nbr=this.nbr+ element.montantreglemaiment
        })
      }
    });
   
    this.enfService.charges().subscribe(res=>{
      charges=res
      console.log(charges)
      charges.forEach(element => {
        let x =new Date(Date.parse(element.datepaycharge)).getTime();
  
        let y =new Date(Date.parse(d1)).getTime();
        let z =new Date(Date.parse(d2)).getTime();
        
  
        if(x>y  && x<z) {
        this.charges2.push(element)
        }
      });
      let nb=0.0
      this.charges2.forEach(element => {
        nb=nb+element.montant
      });
      let nbr=0.0
      this.reglement2.forEach(element => {
        nbr=nbr+element.montantreglemaiment
      });
      console.log(this.reglement2)
    console.log(nbr)
   // this.nbr=nbr
      this.nbc=nb
      this.m=this.nbr-this.nbc
      console.log(this.m)
    })
  })
}
print(){
  clearInterval(this.timer);
  window.print()
 window.close()
}
}
