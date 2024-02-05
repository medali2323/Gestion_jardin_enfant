import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardm',
  templateUrl: './dashboardm.component.html',
  styleUrls: ['./dashboardm.component.css']
})
export class DashboardmComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  abs(){
this.route.navigate(["/maitresse/classe"])
  }
  document(){
    this.route.navigate(["maitresse/listdocument"])
  }
  compte(){
this.route.navigate(["/maitresse/modifiercompte"])
  }
  classe(){
    this.route.navigate(["/maitresse/classe"])

  }
}
