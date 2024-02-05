import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-modiffrais',
  templateUrl: './modiffrais.component.html',
  styleUrls: ['./modiffrais.component.css']
})
export class ModiffraisComponent implements OnInit {
frais:any={
  nivfrais:"",
  typeregime:""
}
public modifierfais: FormGroup;

  constructor(private route:ActivatedRoute,private router:Router,private enfService:DirecteurService,private fb: FormBuilder) {
    let formControls = {
     

      montant : new FormControl('',[
        Validators.required,
       
          Validators.pattern("^[0-9]*$,")
      ]),
      typefrais: new FormControl(),
      regimehoraire: new FormControl(),
    
    }
    this.modifierfais = this.fb.group(formControls);
  } 
  get montant(){
    return this.modifierfais.get('montant')
  }
  
tnb:boolean=false
  ngOnInit() {

    let id=this.route.snapshot.paramMap.get("id")
    let nb=Number(id)
    this.getfai(id)
    if (nb<5) {
      this.tnb=true
    }
  }
getfai(id){
this.enfService.fraisbyid(id).subscribe(res=>{
this.frais=res
console.log(res)
this.modifierfais.patchValue({
  montant:res["montant"],
  regimehoraire:res["regimehoraire"],
  typefrais:res["typefrais"],

})
console.log(this.modifierfais.get("montant"))
if(id>5 ){
  let ch = this.frais["typefrais"]
  let l = ch.length
  let ch1 = ch[l - 1]
  let x = Number(ch1) - 2
  // console.log(x)
  if(x==1){
    this.frais.nivfrais="ثلاثة سنوات"
  }
  if(x==2){
    this.frais.nivfrais="أربعة سنوات"
  }  if(x==3){
    this.frais.nivfrais="خمسة سنوات"
  }
  console.log(this.frais)

}else
{
  this.enfService.rh().subscribe(res=>{
    let rgs:any=[]
    rgs=res
    console.log(res)
      rgs.forEach(element => {
        if(this.frais.id==element.id){
          this.frais.type=element.typeregime
        }
  
      });
      console.log(this.frais)

  })
}
})

}
modif(){
  
  let id=this.route.snapshot.paramMap.get("id")
  let data = this.modifierfais.value;
  if(data.montant<0){
    alert(" الثمن يجب أن يكون أكبر من صفر ")
  }else{
    this.enfService.modifierfraisbyid(id,data).subscribe(res=>{
      console.log(res)
      this.router.navigate(['frais'])
  
  
    });
  }

}
}
