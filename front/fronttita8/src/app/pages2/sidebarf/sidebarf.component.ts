import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebarf',
  templateUrl: './sidebarf.component.html',
  styleUrls: ['./sidebarf.component.css']
})
export class SidebarfComponent implements OnInit {

  constructor(private route:Router) { }
x:any
  ngOnInit() {
    this.x=localStorage.getItem("x")
    console.log(this.x)
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
   absance(){
    this.route.navigate(["gestabssance"]) 

   }
   document(){
    this.route.navigate(["gestdocument"]) 

   }
   gestionfinance(){
    this.route.navigate(["gestionfinance"]) 

   }
club(){
  this.route.navigate(["listcub"]) 

}
compte(){
  this.route.navigate(["listecompte"]) 

}
}
