import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-printreglement',
  templateUrl: './printreglement.component.html',
  styleUrls: ['./printreglement.component.css']
})
export class PrintreglementComponent implements OnInit {
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
      if(ch.indexOf(" ")>0){
        let ch1=ch.split(" ")
        if(ch1[0]=="null"){
          let ch2=ch1[1]
          let x=Number(ch2)
          let m:string
          switch (x ) {
            case 0:
              m="الترسيم"
              this.t=true
              break;
            case 9:
              m="شهر سبتمبر"
              break;
              case 10:
               m="شهر أكتوبر"
               break; 
               case 11:
               m="شهر نوفمبر"
               break; case 12:
               m="شهر ديسمبر"
               break; case 1:
               m="شهر جانفي"
               break; case 2:
               m="شهر فيفري"
               break; case 3:
               m="شهر مارس"
               break; case 4:
               m="شهر أفريل"
               break; case 5:
               m="شهر ماي"
               break; case 6:
               m="شهر جوان"
               break;
          
            default:
              break;
          }
          this.reg.moisreglemaiment=m
        }
        if(ch1[0]!="null"){
          let ch2=ch1[1]
          let ch3=ch1[0]
  let ch4
  let club:any
          let x=Number(ch3)
          let y=Number(ch2)
  this.enfService.getbyid(y).subscribe(res=>{
    club=res
  ch4="نادي "+club.nom
  
          let m:string
          switch (x ) {
            case 0:
              m="الترسيم"
              break;
            case 9:
              m="شهر سبتمبر"
              break;
              case 10:
               m="شهر أكتوبر"
               break; 
               case 11:
               m="شهر نوفمبر"
               break; case 12:
               m="شهر ديسمبر"
               break; case 1:
               m="شهر جانفي"
               break; case 2:
               m="شهر فيفري"
               break; case 3:
               m="شهر مارس"
               break; case 4:
               m="شهر أفريل"
               break; case 5:
               m="شهر ماي"
               break; case 6:
               m="شهر جوان"
               break;
          
            default:
              break;
          }
          ch4=ch4+" "+ m
          this.reg.moisreglemaiment=ch4
        
      })
        
  
      
      
  }
  this.enfService.getbyid(this.reg.enfant).subscribe(resf=>{
    this.enf=resf
    console.log(this.enf)
  
  })
      }
      if(ch.indexOf("&")>0){
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
      }
     
})  
}
print(){
  clearInterval(this.timer);
  window.print()
 window.close()
}
}
