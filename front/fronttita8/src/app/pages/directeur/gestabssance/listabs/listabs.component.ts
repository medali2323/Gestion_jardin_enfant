import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-listabs',
  templateUrl: './listabs.component.html',
  styleUrls: ['./listabs.component.css']
})
export class ListabsComponent implements OnInit {
  constructor(private route:Router) { }

  ngOnInit() {
  }
  absclasse(){
    this.route.navigate(["gestabssanceclasse"])
      }
      absmait(){
        this.route.navigate(["absancemaitresse"])
    
      }
}