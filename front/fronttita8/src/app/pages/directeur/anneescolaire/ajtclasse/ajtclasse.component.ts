import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-ajtclasse',
  templateUrl: './ajtclasse.component.html',
  styleUrls: ['./ajtclasse.component.css']
})
export class AjtclasseComponent implements OnInit {

 
  constructor(private route:Router,private enfService:DirecteurService) { }

  ngOnInit() {
    this.change()
  }
  niveau:any
  anneescolaire:any
  classe:any={
    Anneescolaire: "",
    non:"",
    niveau:""
    
  }

  change(){
    this.enfService.niveau().subscribe(res=>{
  
  this.niveau=res
  /*
  console.log("hhh" +  this.niveau.length)
     for (let index = 0; index < this.niveau.length; index++) {
  this.tab[index]=this.niveau[index]["id"]
  
     }
     console.log(this.tab)
  */

  
  
     }), err => alert(" echek niv enf"+ err)

  this.enfService.anneescolaire().subscribe(res=>{
  
    this.anneescolaire=res
    console.log(res)
  })
  }
  ajtclasse(){
    console.log(this.classe)
      this.enfService.ajtclasse(this.classe).subscribe(res=>{
     
        console.log(res)
      }), err => alert(" echek register enf"+ err)
    }
}
