import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';
import { EmailValidators, UniversalValidators } from 'ngx-validators';
import { DatePipe } from '@angular/common';
import { TService } from 'src/app/service/t.service';
@Component({
  selector: 'app-ajoutens',
  templateUrl: './ajoutens.component.html',
  styleUrls: ['./ajoutens.component.css']
})
export class AjoutensComponent implements OnInit {
	public myForm: FormGroup;
  d:Date = new Date();
  dat:any
  constructor(private fb: FormBuilder,private authm:DirecteurService,private rote:Router,private DatePipe:DatePipe,private toast:TService) {

    let formControls = {
      prenom : new FormControl('',[
        Validators.required,
      ]),  nom : new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      cin : new FormControl('',[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8)

      ]),
      datecin : new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
       datenessance : new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]), villenessance : new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]), nationalite : new FormControl('',[
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
        Validators.minLength(8),
        Validators.maxLength(8)

      ]), adresse : new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      user:new FormControl(),
      dateemb:new FormControl(),
    }
    
    this.myForm = this.fb.group(formControls);
    let dd =this.DatePipe.transform(this.d, 'yyyy-MM-dd');
    this.dat=dd 
  } 
  get prenom()
  {
    return this.myForm.get('prenom')
  }
  get nom()
  {
    return this.myForm.get('nom')
  }
  get cin()
  {
    return this.myForm.get('cin')
  } 
  get datecin()
  {
    return this.myForm.get('datecin')
  } 
  get villenessance()
  {
    return this.myForm.get('villenessance')
  }  get nationalite()
  {
    return this.myForm.get('nationalite')
  }  get datenessance()
  {
    return this.myForm.get('datenessance')
  }  get nvscolaire()
  {
    return this.myForm.get('nvscolaire')
  }  get specialite()
  {
    return this.myForm.get('specialite')
  }  get tel()
  {
    return this.myForm.get('tel')
  }  get adresse()
  {
    return this.myForm.get('adresse')
  } 
  get dateemb()
  {
    return this.dat
  } 
 public mat;
  ngOnInit(): void {
   // this.getid()
  }
  public idm;
  m:any ={
    username:'',
    email:'',
    password:''
  };
  um:any
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
  ens:any=[]
  t:boolean
  register(){
    let r=this.myForm.value
    r.dateemb=this.dat
    console.log(r)
    this.authm.ajtaitmres(r).subscribe(data => {
      this.toast.showSuccessToast("تم التسجيل بنجاح")

      console.log("mat es inscrit"+data)
      this.rote.navigate(["listens"])
    }), err => alert(" echek register mait"+ err)



  
    /*
    this.authm.getm().subscribe(res => {
      this.ens=res
      this.t=false
      let i=0
      this.ens.forEach(element => {
        if (element["cin"]==r["cin"]) {
          this.t=true

        }
        console.log(this.t)

        });
       console.log(this.t)
    if (this.t==false) {
      this.m.username=r["cin"]
    this.m.email=r["cin"]+"@tita.tn"
    this.m.password=r["tel"]
    this.m.password2=r["tel"]
    /*
let data={}
data["password"]=r["nom"]+"_"+r["prenom"]

data["password"]=r["tel"]
this.authm.register2(data).subscribe(res=>{
  
}) 
    console.log(this.m)
      this.authm.register(this.m).subscribe(res => {
        console.log(res)
        let users:any=[]
this.authm.gettalluser().subscribe(res=>{
users=res
let i=0
while (users[i].email!= this.m.email && i<users.length) {
  i++
}
if(users[i].email== this.m.email){
  this.idm=users[i].id

}
r.user=this.idm
console.log(" r fi west "+r)
this.authm.getuser(this.idm).subscribe(data => { 
 this.um=data
this.um["is_ens"]=true
this.authm.putuser(this.idm,this.um).subscribe(data => { 


});
})
let user2={
  username:'',
  
  password:'',

}
user2.username= this.m.username
user2.password=this.m.password
this.authm.register2(user2).subscribe(res=>{
console.log(res)
})
      
     this.authm.ajtaitmres(r).subscribe(data => {
      this.toast.showSuccessToast("تم التسجيل بنجاح")

      console.log("mat es inscrit"+data)
      this.rote.navigate(["listens"])
    }), err => alert(" echek register mait"+ err)



  }, err => alert(" echek register user"+ err)
  );
    })
  
  
 
  }
  else{
    this.toast.showErrorToast("هدا المدرس موجود")

  }
  



	


})
*/


  }
  }