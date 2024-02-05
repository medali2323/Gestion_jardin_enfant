import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-dashboardp',
  templateUrl: './dashboardp.component.html',
  styleUrls: ['./dashboardp.component.css']
})
export class DashboardpComponent implements OnInit {
 private id=localStorage.getItem("id")
  constructor(private enfservice:DirecteurService,private router:Router) { }
enfsp:any=[]
  ngOnInit() {
    this.getallenf()
  }
  getallenf(){
    let enfs:any=[]
this.enfservice.getallenfs().subscribe(res=>{
enfs=res
console.log(enfs)

enfs.forEach(element => {
  if(element.userparent ==this.id){
    this.enfsp.push(element)
  }
});
console.log(this.enfsp)
})
  }
  detailenfant(){
    this.router.navigate(["parent/listenfant"])
  }
  abs(){
    this.router.navigate(["parent/listenfant"])

  }
  compte(){
    this.router.navigate(["parent/modifierciompte"])

  }
  pay(){
    this.router.navigate(["parent/listenfant"])

  }
  enf(){
    this.router.navigate(["parent/listenfant"])

  }
}
