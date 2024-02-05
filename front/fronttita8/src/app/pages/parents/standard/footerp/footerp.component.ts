import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footerp',
  templateUrl: './footerp.component.html',
  styleUrls: ['./footerp.component.css']
})
export class FooterpComponent implements OnInit {
u:any
  constructor() { }

  ngOnInit() {
 
this.u=localStorage.getItem("username")
  }

}
