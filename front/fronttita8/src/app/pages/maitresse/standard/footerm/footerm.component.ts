import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footerm',
  templateUrl: './footerm.component.html',
  styleUrls: ['./footerm.component.css']
})
export class FootermComponent implements OnInit {

  constructor() { }
  username:string
  u:string=''
  ngOnInit() {
this.username=localStorage.getItem("username")
for (let index = 0; index < this.username.length; index++) {
  let element = this.username[index];
  if (element=="_") {
    element=" "

  }
  this.u=this.u+ element
  
}
  }

}
