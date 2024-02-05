import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-listniveau',
  templateUrl: './listniveau.component.html',
  styleUrls: ['./listniveau.component.css']
})
export class ListniveauComponent implements OnInit {

  constructor(private route:ActivatedRoute,private enfService:DirecteurService,private router:Router) {  }
l:any=[]
  ngOnInit() {
    this.listniveau()
  }
listniveau(){
  this.enfService.niveau().subscribe(res => {
    this.l=res
  })
}
ajtniveau(){
  this.router.navigate(["ajouterniveau"])
}
detail(dataItem){
  this.router.navigate(["detailniveau",dataItem.id])

}
modifier(dataItem){
  this.router.navigate(["modifierniveau",dataItem.id])

}
}
