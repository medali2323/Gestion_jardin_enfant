import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';
import { TService } from 'src/app/service/t.service';
@Component({
  selector: 'app-ajtactivitespecial',
  templateUrl: './ajtactivitespecial.component.html',
  styleUrls: ['./ajtactivitespecial.component.css']
})
export class AjtactivitespecialComponent implements OnInit {
  constructor(  private enfantservice:DirecteurService,private route:ActivatedRoute,private router:Router,private fb: FormBuilder,private t:TService) {
    let formControls = {
      nom : new FormControl('',[
        Validators.required,
       
      ]),
      prixactivite : new FormControl('',[
        Validators.required,
       
      ]),
      dateactivite : new FormControl('',[
       
      ])
   } 
   this.f = this.fb.group(formControls);

  }
  get nom(){
    return this.f.get('nom')
  } 
  get dateactivite(){
    
    return this.f.get('dateactivite')
  } 
  get prixactivite(){
    
    return this.f.get('prixactivite')
  }
annee:any
public f: FormGroup;
  ngOnInit() {
  }
ch="هذا النشاط موجود"
  ajtannee(){
    let data = this.f.value;
let t=false
    let ac:any=[]
    let i=0
    this.enfantservice.activite().subscribe(res=>{
      ac=res
      let myUser = ac.filter(u => u.nom == data.nom && u.nom!=this.annee.nom )

        if(myUser.length<=0){
if(data.prixactivite<0){
  this.t.showErrorToast
  (" الثمن يجب أن يكون أكبر من صفر ")
}else{
          this.enfantservice.aactivite(data).subscribe(res=>{
            this.router.navigate(["listcub"])
            console.log(res)
          }), err => alert(" echek register enf"+ err)
        }
        }
        else
        {
          this.t.showErrorToast
          (this.ch)
        }
          
    })
    console.log(data)
    
    }
}

