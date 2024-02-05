import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';
import { TService } from 'src/app/service/t.service';

@Component({
  selector: 'app-modifcharge',
  templateUrl: './modifcharge.component.html',
  styleUrls: ['./modifcharge.component.css']
})
export class ModifchargeComponent implements OnInit {
	public modifiercharge: FormGroup;

  constructor(private route:Router,private enfService:DirecteurService,private formBuilder: FormBuilder,private http: HttpClient,private toast:TService,private router:ActivatedRoute) { 
    let formControls = {
      nom : new FormControl('',[
        Validators.required,
      ]),
      montant : new FormControl('',[
        Validators.required,
      ]),
      datepaycharge : new FormControl('',[
        Validators.required,
      ]),
    }
    this.modifiercharge = this.formBuilder.group(formControls);
  }
  get nom(){
    return this.modifiercharge.get('nom')
  } 
  get montant(){
    return this.modifiercharge.get('montant')
  }
  get datepaycharge(){
    return this.modifiercharge.get('datepaycharge')
  }  


  ngOnInit() {
    this.getcharge()
  }
  charge:any={
    nom:"",
    montant:0
    
  }
  getcharge()
  {
    let id=this.router.snapshot.paramMap.get("id")
    this.enfService.chargebyid(id).subscribe(res=>{
        this.charge=res
        this.aux=res
        this.modifiercharge.patchValue({
          nom:this.charge["nom"],
          montant:this.charge["montant"],
          datepaycharge:this.charge["datepaycharge"],
        })
        console.log(this.charge)
    })

  }
  pycejointe:File

date:any
onfileChanged(event: any) {
  this.pycejointe = event.target.files[0];
}

aux:any

modifiecharge() {
  let ttt:boolean=false
  let tt:boolean=false
    let id=this.router.snapshot.paramMap.get("id")
    let data = this.modifiercharge.value;
    console.log(data)
    const uploadData = new FormData();
    let chs:any=[]
    if(data.montant<0){
      this.toast.showErrorToast(" الثمن يجب أن يكون أكبر من صفر ")
    }else{
      this.enfService.charges().subscribe(res=>{
        chs=res
     
   
      if(typeof(this.pycejointe)=="string"||this.pycejointe==null ){
        uploadData.append('nom', data.nom);
        uploadData.append('montant', data.montant);
        uploadData.append('datepaycharge', data.datepaycharge)
        if( this.aux.nom ==uploadData.get("nom")&& this.aux.datepaycharge==uploadData .get("datepaycharge")){
          ttt=true
      }
      if(ttt){
        this.enfService.mdfchargebyid(id,data).subscribe(
          data =>{
            console.log(data)
            this.route.navigate(["gestressource"])
          },
          error => console.log(error)
        );
      }else{
        let myUser = chs.filter(u => u.nom ==uploadData .get("nom")&& u.datepaycharge==uploadData .get("datepaycharge") )
        if(myUser.length>0){
          this.toast.showErrorToast("هذه المصاريف موجودة")
        }else{
          this.enfService.mdfchargebyid(id,data).subscribe(
            data =>{
              console.log(data)
              this.route.navigate(["gestressource"])
            },
            error => console.log(error)
          );
        }
      }
      }
      else {
  
    
      uploadData.append('pycejointe', this.pycejointe);
      uploadData.append('nom', data.nom);
      uploadData.append('montant', data.montant);
      uploadData.append('datepaycharge', data.datepaycharge)
      console.log(this.charge.pycejointe)
      if( this.aux.nom ==uploadData .get("nom")&& this.aux.datepaycharge===uploadData .get("datepaycharge")){
        tt=true
    }
    if(tt){
      this.enfService.mdfchargebyid(id,uploadData).subscribe(
        data =>{
          console.log(data)
          this.route.navigate(["gestressource"])
        },
        error => console.log(error)
      );
    }else{
      let myUser = chs.filter(u => u.nom ==uploadData .get("nom")&& u.datepaycharge===uploadData .get("datepaycharge") )
      if(myUser.length>0){
        this.toast.showErrorToast("هذه المصاريف موجودة")
      }else{
        this.enfService.mdfchargebyid(id,uploadData).subscribe(
          data =>{
            console.log(data)
            this.route.navigate(["gestressource"])
          },
          error => console.log(error)
        );
      }
    }
    
    }
  })
    }






  }



}
