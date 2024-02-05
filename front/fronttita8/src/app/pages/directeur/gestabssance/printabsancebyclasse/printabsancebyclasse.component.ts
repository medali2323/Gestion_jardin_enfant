import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { DirecteurService } from 'src/app/service/directeur.service';
@Component({
  selector: 'app-printabsancebyclasse',
  templateUrl: './printabsancebyclasse.component.html',
  styleUrls: ['./printabsancebyclasse.component.css']
})
export class PrintabsancebyclasseComponent implements OnInit {
  enfs:any=[]
  absenfs:any=[]
  timer:any
   dat = this.route.snapshot.paramMap.get("idc")
  enfss:any=[]
    constructor(private route: ActivatedRoute, private enfService: DirecteurService, private router: Router, private datePipe: DatePipe, public fb: FormBuilder) {}
  
    ngOnInit() {
      this.aaa()
      this.getclasse()
    
    }
  
  aaa(){
    let allabsance:any=[]
    let allabsancebydate:any=[]
    let myUser:any=[]
    let id = this.route.snapshot.paramMap.get("id")
    let databs = this.route.snapshot.paramMap.get("idc")
    let enfs:any = []

    this.enfService.getallenfs().subscribe(res => {
      enfs=res
      this.enfs = enfs.filter(u => u.classe ==id)
      this.enfService.getabsenf().subscribe(res => {
  
        allabsance = res
        console.log(allabsance)
        console.log(databs)
        allabsance.forEach(element => {
          if (element.dateabcence == databs) {
            allabsancebydate.push(element)
          }
        });
        console.log(allabsancebydate)
    allabsancebydate.forEach(element => {
     myUser = enfs.filter(u => u.id == element.enfant  )
     console.log( myUser)

     if(myUser.length>0){
        this.absenfs.push(myUser[0])
  
      }
    });
if(this.absenfs.length==0){
  this.router.navigate(["absanceclasse",id])

}else{
  this.timer=setInterval(()=>{
    this.print()
    },1000) 
}
      })
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
  