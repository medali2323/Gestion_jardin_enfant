import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';
import { TService } from 'src/app/service/t.service';

@Component({
  selector: 'app-modifierens',
  templateUrl: './modifierens.component.html',
  styleUrls: ['./modifierens.component.css']
})
export class ModifierensComponent implements OnInit {
  public updatemaitresse: FormGroup;

  r:any ={
    nom:'',
    prenom:'',
    cin:'',
    datenessance:'',
    villenessance:'',
    nationalite:'',
    //phtcin:'',
    nvscolaire:'',
    specialite:'', 
    tel:'',
    adresse:'',
    //phtmat:'',
   user:''
  };
  constructor(  private enfantservice:DirecteurService,private route:ActivatedRoute, private router:Router,private fb:FormBuilder ,private toast:TService) {

    let formControls = {
      nom : new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      prenom : new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]), cin : new FormControl('',[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8)

      ]), datenessance : new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]), villenessance : new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]), nationalite : new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]), datecin : new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]), nvscolaire : new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]), specialite : new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      tel : new FormControl('',[
        Validators.required,
        Validators.minLength(8)
      ]), adresse : new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),actif : new FormControl('',[
       
      ]),
      dateemb : new FormControl('',[
        Validators.required,
      ])
    }
    this.updatemaitresse = this.fb.group(formControls);
  } 
  get nom()
  {
    return this.updatemaitresse.get('nom')
  }
  get prenom()
  {
    return this.updatemaitresse.get('prenom')
  }
  get cin()
  {
    return this.updatemaitresse.get('cin')
  }  get datenessance()
  {
    return this.updatemaitresse.get('datenessance')
  }  get villenessance()
  {
    return this.updatemaitresse.get('villenessance')
  }  get nationalite()
  {
    return this.updatemaitresse.get('nationalite')
  }  get datecin()
  {
    return this.updatemaitresse.get('datecin')
  }  get nvscolaire()
  {
    return this.updatemaitresse.get('nvscolaire')
  }  get specialite()
  {
    return this.updatemaitresse.get('specialite')
  }  get tel()
  {
    return this.updatemaitresse.get('tel')
  }  get adresse()
  {
    return this.updatemaitresse.get('adresse')
  } 
  get actif()
  {
    return this.updatemaitresse.get('actif')
  } 
  get dateemb()
  {
    return this.updatemaitresse.get('dateemb')
  } 
  
  ngOnInit() {
    this.getenf()
  }
  ens:any
  getenf(){
    let id=this.route.snapshot.paramMap.get("id")
    this.enfantservice.getmbyid(id).subscribe(re=>{
      this.ens=re
let aux=re
      let data=re
      this.updatemaitresse.patchValue({
        nom:data["nom"],
        prenom:data["prenom"],
        cin:data["cin"],
        datenessance:data["datenessance"],
        villenessance:data["villenessance"],
        nationalite:data["nationalite"],
        datecin:data["datecin"],
        nvscolaire:data["nvscolaire"],
        specialite:data["specialite"],
        tel:data["tel"],
        adresse:data["adresse"],
        actif:data["actif"],
        dateemb:data["dateemb"],
//        user:data["user"]
      });
 
    });


  
  }
  rr:any={
    old_password:"",
    new_password:""
  }
  modifier()
  {
    let id=this.route.snapshot.paramMap.get("id")

console.log(    this.updatemaitresse )  
let data = this.updatemaitresse.value;
console.log(data)
let x=data.user
let ens:any=[]
this.enfantservice.getm().subscribe(res=>{
  ens=res
  let myUser = ens.filter(u => u.cin == data.cin && u.cin!=this.ens.cin)
  if( myUser.length>0){
    this.toast.showErrorToast("هدا المدرس موجود")
  }      else{
    this.enfantservice.modifm(id,data).subscribe(res=>{
      /*
      this.enfantservice.getuser(x).subscribe(res=>{
        let aa:any=res
        console.log(aa)
        let d:any=res
        d.username=data.cin
        d.password=data.tel
        d.pass2=data.tel
        this.enfantservice.putuser(x,d).subscribe(res=>{
          console.log(res)
        })
       
        let log:any
        log.username=aa.username
        log.password=aa.password
     this.enfantservice.login(log).subscribe(res=>{
       console.log(res)
       let token=res
       this.rr.old_password=log.password
       this.rr.new_password=data.cin
  
       this.enfantservice.mdfp2(this.rr,token).subscribe(res=>{
         console.log(res)
       })
     })
      })
      */
        console.log(res)
        this.router.navigate(['listens'])
  
      });
  }
})
  }
}

