import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-listfrais',
  templateUrl: './listfrais.component.html',
  styleUrls: ['./listfrais.component.css']
})
export class ListfraisComponent implements OnInit {
frais:any=[]
fraismonth:any=[]
fraisinscri:any=[]
  constructor(private route:Router,private enfService:DirecteurService) {  }

  ngOnInit() {
    this.getfrais()
  }
getfrais(){
this.enfService.frais().subscribe(res=>{
this.frais=res
for (let index = 0; index <5; index++) {
  const element = this.frais[index];
  this.fraismonth.push(element)
  
}
for (let index = 5; index <this.frais.length; index++) {
  const element = this.frais[index];
  this.fraisinscri.push(element)
  
}
for (let index = 0; index < this.fraisinscri.length; index++) {

  const element = this.fraisinscri[index];
  let ch = element["typefrais"]
  let l = ch.length
  let ch1 = ch[l - 1]
  let x = Number(ch1) - 2
  // console.log(x)
  if(x==1){
    element.nivfrais="ثلاثة سنوات"
  }
  if(x==2){
    element.nivfrais="أربعة سنوات"
  }  if(x==3){
    element.nivfrais="خمسة سنوات"
  }
    //  console.log(this.e)

  

}

this.enfService.rh().subscribe(res=>{
  let rgs:any=[]
  rgs=res
  console.log(res)
  this.fraismonth.forEach(elt => {
    rgs.forEach(element => {
      if(elt.id==element.id){
        elt.type=element.typeregime
      }

    });
  });
})

})
}
editClick(dataItem){
  this.route.navigate(["modifierfrais",dataItem.id])
}
}
