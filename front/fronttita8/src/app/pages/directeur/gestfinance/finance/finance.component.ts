import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

  constructor(private DirecteurService:DirecteurService,private route:Router) {}

  ngOnInit() {
  }
  ressource(){
this.route.navigate(["gestressource"])
  }
  payment(){
    this.route.navigate(["payment"])

  }
  resume(){
    this.route.navigate(["resume"])

  }

}
