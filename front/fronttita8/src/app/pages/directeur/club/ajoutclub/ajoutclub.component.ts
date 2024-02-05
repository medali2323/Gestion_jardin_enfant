import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';
import { TService } from 'src/app/service/t.service';

@Component({
  selector: 'app-ajoutclub',
  templateUrl: './ajoutclub.component.html',
  styleUrls: ['./ajoutclub.component.css']
})
export class AjoutclubComponent implements OnInit {
  constructor(  private enfantservice:DirecteurService,private route:ActivatedRoute,private router:Router,private fb: FormBuilder,private t:TService) {
    let formControls = {
      nom : new FormControl('',[
        Validators.required,
       
      ]),
      obligatoire : new FormControl('',[
       
      ]),
      prix : new FormControl('',[
       
      ])
   } 
   this.f = this.fb.group(formControls);

  }
  get nom(){
    return this.f.get('nom')
  } 
  get obligatoire(){
    
    return this.f.get('obligatoire')
  } 
  get prix(){
    return this.f.get('prix')
  } 
annee:any
public f: FormGroup;
  ngOnInit() {
  }

  ajtannee(){
    let data = this.f.value;
    let clubs:any=[]

    console.log(data)
if(data.obligatoire=="")
data.obligatoire=false
if(data.prix<0)
{
  this.t.showErrorToast(" الثمن يجب أن يكون أكبر من صفر ")
}else{
  this.enfantservice.clubs().subscribe(res=>{
    clubs=res
    let myUser = clubs.filter(u => u.nom == data.nom )
    if(myUser.length>0){
      this.t.showErrorToast("هذا النادي موجود")
    }else{
      this.enfantservice.ajtclub(data).subscribe(res=>{
        this.router.navigate(["listcub"])
        console.log(res)
      }), err => alert(" echek register enf"+ err)
    }
  })
  
    }
    }
}

