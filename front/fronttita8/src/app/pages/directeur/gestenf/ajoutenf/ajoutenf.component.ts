import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';
import { TService } from 'src/app/service/t.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-ajoutenf',
  templateUrl: './ajoutenf.component.html',
  styleUrls: ['./ajoutenf.component.css']
})
export class AjoutenfComponent implements OnInit {

 pas:boolean=false
	public ajoutenfant: FormGroup;

  constructor(private route:Router,private enfService:DirecteurService,private fb: FormBuilder,private toast:TService) {
    let formControls = {
      nom : new FormControl('',[
        Validators.required,
      ]),
      prenom : new FormControl('',[
        Validators.required,
      ]),
       datenessance : new FormControl('',[
        Validators.required,
      ]),
   
      etatmedical : new FormControl('',[
        Validators.required,
       
      ]), 
      Nompere : new FormControl('',[
        Validators.required,
      ]),
    
       profissionpere : new FormControl('',[
        Validators.required,
      ]), proffisionmere : new FormControl('',[
        Validators.required,
      ]), Nommere : new FormControl('',[
        Validators.required,
      ]),
      telpere : new FormControl('',[
        Validators.required,
        Validators.minLength(8),
         Validators.maxLength(8),
         Validators.pattern("^[0-9]*$")
        ]),
      telmere : new FormControl('',[
        Validators.required,
       Validators.minLength(8),
         Validators.maxLength(8),
         Validators.pattern("^[0-9]*$")

         

      ]),
      cinparent : new FormControl('',[
        Validators.required,
       Validators.minLength(8),
         Validators.maxLength(8),
         Validators.pattern("^[0-9]*$")

         

      ]),
      cinparent2 : new FormControl('',[
        Validators.required,
       Validators.minLength(8),
         Validators.maxLength(8),
         Validators.pattern("^[0-9]*$")

         

      ]),
      numpass : new FormControl('',[
      //  Validators.required,
  
         

      ]),
      numpass2 : new FormControl('',[
       // Validators.required,
  
         

      ]),
       adresse : new FormControl('',[
        Validators.required,
      ]),
      userparent : new FormControl('',[
       
      ])
     
     
    }
    this.ajoutenfant = this.fb.group(formControls);
  }
  get prenom(){
    return this.ajoutenfant.get('prenom')
  } 
  get nom(){
    return this.ajoutenfant.get('nom')
  }
  get datenessance(){
    return this.ajoutenfant.get('datenessance')
  }  
  get etatmedical(){
    return this.ajoutenfant.get('etatmedical')
  } 
  get Nompere(){
    return this.ajoutenfant.get('Nompere')
  } 
  


  get adresse(){
    return this.ajoutenfant.get('adresse')
  } 
   get Nommere(){
    return this.ajoutenfant.get('Nommere')
  } 
   
 
   
 
  get proffisionmere(){
    return this.ajoutenfant.get('proffisionmere')
  } get profissionpere(){
    return this.ajoutenfant.get('profissionpere')
  } get telpere(){
    return this.ajoutenfant.get('telpere')
  } get telmere(){
    return this.ajoutenfant.get('telmere')
  }
  get cinparent(){
    return this.ajoutenfant.get('cinparent')
  }
  get cinparent2(){
    return this.ajoutenfant.get('cinparent2')
  }
  get numpass(){
    return this.ajoutenfant.get('numpass')
  }
  get numpass2(){
    return this.ajoutenfant.get('numpass2')
  }

  ngOnInit(): void {
  }
  m:string
 
  enfs:any=[]
  t:boolean=false

  idp:any
  udm:any
ajtenf(){
  let enf=this.ajoutenfant.value
let enfs:any=[]
  this.enfService.getallenfs().subscribe(r => {
    enfs=r
    console.log(enfs)
    this.enfService.ajout(enf).subscribe(res=>{
      this.toast.showSuccessToast("تم التسجيل بنجاح")

      //yemchi lil page affectation 
      this.route.navigate(["affecterclasse",res["id"],true])
    
      console.log(res["id"])
    }), err => alert(" echek register enf"+ err)
    
        

    
})

}

}