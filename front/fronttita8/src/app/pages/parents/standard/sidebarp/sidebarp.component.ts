import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebarp',
  templateUrl: './sidebarp.component.html',
  styleUrls: ['./sidebarp.component.css']
})
export class SidebarpComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  compte(){
    this.router.navigate(["parent/modifierciompte"])

  }
  enfant(){
    this.router.navigate(["parent/listenfant"])

  }
}
