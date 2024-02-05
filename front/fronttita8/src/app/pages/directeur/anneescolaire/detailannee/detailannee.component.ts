import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-detailannee',
  templateUrl: './detailannee.component.html',
  styleUrls: ['./detailannee.component.css']
})
export class DetailanneeComponent implements OnInit {

  constructor(  private enfantservice:DirecteurService,private route:ActivatedRoute,private router:Router) { }
annee:any
an:any
  ngOnInit() {
    this.ann()
  }


ann(){
  let id=this.route.snapshot.paramMap.get("id")
  this.enfantservice.anneescolairebyid(id).subscribe(res=>{
this.annee=res
  })
}
mdfannee(){
    let id=this.route.snapshot.paramMap.get("id")

this.router.navigate(["modifieranneescolaire",id])
}
supannee(){
  let id=this.route.snapshot.paramMap.get("id")
    this.enfantservice.deleteaneescolaire(id).subscribe(res=>{
      this.router.navigate([""])

    })
}
}
