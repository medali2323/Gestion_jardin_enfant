import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-modifieranneescolaire',
  templateUrl: './modifieranneescolaire.component.html',
  styleUrls: ['./modifieranneescolaire.component.css']
})
export class ModifieranneescolaireComponent implements OnInit {

  constructor(  private enfantservice:DirecteurService,private route:ActivatedRoute,private router:Router,private fb: FormBuilder) {
    let formControls = {
      date_deb : new FormControl('',[
        Validators.required,
       
      ]),
      date_fin : new FormControl('',[
        Validators.required,
       
      ])
   } 
   this.f = this.fb.group(formControls);

  }
  get date_deb(){
    return this.f.get('date_deb')
  } 
  get date_fin(){
    return this.f.get('date_fin')
  } 
annee:any
public f: FormGroup;

  ngOnInit() {
    this.ann()
  }


ann(){
  let id=this.route.snapshot.paramMap.get("id")
  this.enfantservice.anneescolairebyid(id).subscribe(res=>{
this.annee=res
this.f.patchValue({
  date_deb:res["date_deb"],
  date_fin:res["date_fin"],
  
})
  })
}
mdfannee(){
  let id=this.route.snapshot.paramMap.get("id")
  let data = this.f.value;
  let ans:any=[]
  this.enfantservice.anneescolaire().subscribe(res=>{
    ans=res
    let a=ans[ans.length-1]
    let d1 =new Date(Date.parse(a.date_deb)).getTime();
    let d2 =new Date(Date.parse(a.date_fin)).getTime();

    let dd1 =new Date(Date.parse(this.annee.date_deb)).getTime();
    let dd2 =new Date(Date.parse(this.annee.date_fin)).getTime();








    let data = this.f.value;
    console.log(data)
    let y =new Date(Date.parse(data.date_deb)).getTime();
    let z =new Date(Date.parse(data.date_fin)).getTime();

    if(d2>y && y!=dd1 && z!=dd2){
alert(" لا يمكن إنشاء سنة دراسية")
    } else{
      if(z<y){
        alert(" يجب أن يكون تاريخ نهاية الفترة أكبرمن تاريخ بداية الفترة ")
      }
      else{
        this.enfantservice.mdfaneescolaire(id,data).subscribe(res=>{
          console.log(res)
          this.router.navigate([''])
      })
      }
    }

  })


 

}
}
