import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footerf',
  templateUrl: './footerf.component.html',
  styleUrls: ['./footerf.component.css']
})
export class FooterfComponent implements OnInit {

  constructor() { }
username:string
  ngOnInit() {
this.username=localStorage.getItem("username")
  }

}
