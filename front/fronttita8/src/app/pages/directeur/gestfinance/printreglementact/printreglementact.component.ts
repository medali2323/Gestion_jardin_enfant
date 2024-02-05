import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-printreglementact',
  templateUrl: './printreglementact.component.html',
  styleUrls: ['./printreglementact.component.css']
})
export class PrintreglementactComponent implements OnInit {

  reg:any
timer:any
enf:any
  constructor(private route:ActivatedRoute,private router:Router,private enfService:DirecteurService) {}

  ngOnInit() {
this.reglement()

this.timer=setInterval(()=>{
  this.print()
  },500)
  
  }
  t:boolean=false
reglement(){
  let id = this.route.snapshot.paramMap.get("id")
    this.enfService.reglementbyid(id).subscribe(res=>{
      this.reg=res
      let ch=this.reg.moisreglemaiment
      let ch1=ch.split("&")
      
        let ch2=ch1[1]
        let x=Number(ch2)
        let m:string
        let data:any
 this.enfService.getactivite(x).subscribe(res=>{
   data=res
  m=data.nom

        this.reg.moisreglemaiment=m
      
this.enfService.getbyid(this.reg.enfant).subscribe(resf=>{
  this.enf=resf
  console.log(this.enf)

})
})  
})
}
print(){
  clearInterval(this.timer);
  window.print()
 window.close()
}
}
