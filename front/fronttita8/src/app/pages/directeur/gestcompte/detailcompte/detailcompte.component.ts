import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-detailcompte',
  templateUrl: './detailcompte.component.html',
  styleUrls: ['./detailcompte.component.css']
})
export class DetailcompteComponent implements OnInit {
user:any
active:boolean
  constructor(private route: ActivatedRoute,private router: Router, private enfService: DirecteurService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id")
    this.getcomtes(id)

  }
  
  getcomtes(id){
this.enfService.getuser(id).subscribe(res=>{
this.user=res
this.active=this.user.is_active
})
  }
  modifiercomtes(){
    let id = this.route.snapshot.paramMap.get("id")

    let data=this.user
  data.is_active=  this.active
console.log(data)
    this.enfService.putuser(id,data).subscribe(res=>{
  console.log(res)
  this.router.navigate(["listecompte"])
    })
      }
}
