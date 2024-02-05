import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';
@Component({
  selector: 'app-printclassee',
  templateUrl: './printclassee.component.html',
  styleUrls: ['./printclassee.component.css']
})
export class PrintclasseeComponent implements OnInit {

  enfs:any=[]
timer:any
  constructor(private route: ActivatedRoute, private enfService: DirecteurService, private router: Router, private datePipe: DatePipe, public fb: FormBuilder) {}

  ngOnInit() {
    this.listeenf()
    this.getclasse()
  
  }
  nb:any
listeenf(){
  let enfs:any = []
  let id = this.route.snapshot.paramMap.get("id")

  this.enfService.getallenfs().subscribe(res => {
    let enfs:any = []
    enfs=res
    this.enfs = enfs.filter(u => u.classe ==id)
    this.nb=this.enfs.length
    if(this.nb==0){
      this.router.navigate(["detailclaase",id])
    }else{
      this.timer=setInterval(()=>{
        this.print()
        },1000)
    }

  })
}
classe:any={
  nom:''
}
ch=""
getclasse(){
  let id = this.route.snapshot.paramMap.get("id")

  this.enfService.classebyid(id).subscribe(res => {
    this.classe=res
    switch (this.classe.niveau) {
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
print(){
  clearInterval(this.timer);
  window.print()
 window.close()
}
}
