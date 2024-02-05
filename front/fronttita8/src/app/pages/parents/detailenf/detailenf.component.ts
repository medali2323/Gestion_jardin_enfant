import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-detailenf',
  templateUrl: './detailenf.component.html',
  styleUrls: ['./detailenf.component.css']
})
export class DetailenfComponent implements OnInit {

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
  detailenfant(d){
    this.router.navigate(["parent/detailenfant",d.id])
  }
}
