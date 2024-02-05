import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';
import { TService } from 'src/app/service/t.service';
//import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tita:string="assets/img/tita.jpg"
tab:any=[]
x:any
  constructor( private route:Router,private dir:DirecteurService,/*private ToastrService:ToastService*/private t:TService) { }

  ngOnInit(): void {
    this.dir.anneescolaire().subscribe(res => {
this.tab=res
    console.log(this.tab[this.tab.length-1])  

  })


}
listenf(){
  this.route.navigate(["listeenfants"]) 
 }
 listmait(){
  this.route.navigate(["listens"]) 
 }
 listclasse(){
  this.route.navigate(["gestclasse"]) 
 }
 recource(){
  this.route.navigate(["gestressource"]) 

 }
 absanceclasse(){
  this.route.navigate(["gestabssanceclasse"]) 

 }
 absancemait(){
  this.route.navigate(["absancemaitresse"]) 

 }
 document(){
  this.route.navigate(["gestdocument"]) 

 }
 gestionfinance(){
  this.route.navigate(["gestressource"]) 

 }
club(){
this.route.navigate(["listcub"]) 

}
pay(){
  this.route.navigate(["payment"])
}
compte(){
  this.route.navigate(["listecompte"])
}
}