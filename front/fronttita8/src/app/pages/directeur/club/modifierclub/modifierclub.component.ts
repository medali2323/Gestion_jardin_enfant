import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';
import { TService } from 'src/app/service/t.service';

@Component({
  selector: 'app-modifierclub',
  templateUrl: './modifierclub.component.html',
  styleUrls: ['./modifierclub.component.css']
})
export class ModifierclubComponent implements OnInit {
  ch="هذا النشاط موجود"

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
  get prix(){
    return this.f.get('prix')
  } 
  get nom(){
    return this.f.get('nom')
  } 
  get obligatoire(){
    return this.f.get('obligatoire')
  } 
annee:any
public f: FormGroup;

  ngOnInit() {
    this.ann()
  }


ann(){
  let id=this.route.snapshot.paramMap.get("id")
  this.enfantservice.clubbyid(id).subscribe(res=>{
this.annee=res
this.f.patchValue({
  nom:res["nom"],
  obligatoire:res["obligatoire"],
  prix:res["prix"],

})
  })
}
mdfannee(){
  let id=this.route.snapshot.paramMap.get("id")
  let data = this.f.value;
  let clubs:any=[]
  this.enfantservice.clubs().subscribe(res=>{
    clubs=res
    let myUser = clubs.filter(u => u.nom == data.nom && u.nom!=this.annee.nom)
    if( myUser.length>0){
      this.t.showErrorToast("هذا النادي موجود")
    }      else{
if(data.prix<0){
  this.t.showErrorToast(" الثمن يجب أن يكون أكبر من صفر ")
}else{
      this.enfantservice.mdfclub(id,data).subscribe(res=>{
        console.log(res)
        this.router.navigate(['listcub'])
    })
  }
    }

  })
 

}
}
