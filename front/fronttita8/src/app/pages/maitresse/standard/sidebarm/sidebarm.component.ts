import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-sidebarm',
  templateUrl: './sidebarm.component.html',
  styleUrls: ['./sidebarm.component.css']
})
export class SidebarmComponent implements OnInit {
t:boolean=false
  constructor(private route:Router,private enfservice:DirecteurService) { }

  ngOnInit() {
    this.aa()
  }
  document(){
this.route.navigate(["maitresse/listdocument"])
  }
  compte(){
    this.route.navigate(["maitresse/modifiercompte"])
      }
      abs(){
        this.route.navigate(["maitresse/classe"])
          }
          enfants(){
            this.route.navigate(["listeenfants"])

          }
          aa(){
            let users:any=[]
            this.enfservice.gettalluser().subscribe(res => {
              console.log(res)
              users = res
              let myUser = users.filter(u => u.username == localStorage.getItem("username"))[0]
              console.log(myUser)
              if (myUser["is_adj"]||myUser["is_superuser"] ) {
                  this.t=true
                  console.log("mahdi")
              }
              })
          }

}
