import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-ajtnivau',
  templateUrl: './ajtnivau.component.html',
  styleUrls: ['./ajtnivau.component.css']
})
export class AjtnivauComponent implements OnInit {

  constructor(  private enfantservice:DirecteurService,private route:ActivatedRoute,private router:Router,private fb: FormBuilder) {
    let formControls = {
 
      libelle : new FormControl('',[
        Validators.required,
       
      ])
   } 
   this.f = this.fb.group(formControls);

  }
  get libelle(){
    return this.f.get('libelle')
  } 

annee:any
public f: FormGroup;
  ngOnInit() {
  }

  ajtannee(){
    let data = this.f.value;
    console.log(data)

      this.enfantservice.ajtniveau(data).subscribe(res=>{
        this.router.navigate(["listniveau"])
        console.log(res)
      }), err => alert(" echek register enf"+ err)
    }
}

