import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';
import { TService } from 'src/app/service/t.service';

@Component({
  selector: 'app-modifieractivite',
  templateUrl: './modifieractivite.component.html',
  styleUrls: ['./modifieractivite.component.css']
})
export class ModifieractiviteComponent implements OnInit {
  ch="هذا النشاط موجود"

 
  constructor(  private enfantservice:DirecteurService,private route:ActivatedRoute,private router:Router,private fb: FormBuilder,private t:TService) {
    let formControls = {
      nom : new FormControl('',[
        Validators.required,
       
      ]),
    
      prixactivite : new FormControl('',[
       
      ])
    ,  dateactivite : new FormControl('',[
      Validators.required,
     
    ]),
   } 
   this.f = this.fb.group(formControls);

  }
  get prixactivite(){
    return this.f.get('prixactivite')
  } 
  get nom(){
    return this.f.get('nom')
  } 

  get dateactivite(){
    return this.f.get('dateactivite')
  } 
annee:any
public f: FormGroup;

  ngOnInit() {
    this.ann()
  }


ann(){
  let id=this.route.snapshot.paramMap.get("id")
  this.enfantservice.getactivite(id).subscribe(res=>{
this.annee=res
this.f.patchValue({
  nom:res["nom"],
  dateactivite:res["dateactivite"],
  prixactivite:res["prixactivite"],

})
  })
}
mdfannee(){
  let id=this.route.snapshot.paramMap.get("id")
  let data = this.f.value;
  let clubs:any=[]
  this.enfantservice.activite().subscribe(res=>{
    clubs=res
    let myUser = clubs.filter(u => u.nom == data.nom && u.nom!=this.annee.nom )
    if( myUser.length>0){
      this.t.showErrorToast
      (this.ch)    }      else{
if(data.prixactivite<0){
  this.t.showErrorToast(" الثمن يجب أن يكون أكبر من صفر ")
}else{
      this.enfantservice.mdfactivite(id,data).subscribe(res=>{
        console.log(res)
        this.router.navigate(['listcub'])
    })
  }
    }

  })
 

}
}
