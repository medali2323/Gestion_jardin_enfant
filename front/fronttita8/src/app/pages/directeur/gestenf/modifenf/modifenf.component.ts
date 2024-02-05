import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';
import { TService } from 'src/app/service/t.service';

@Component({
  selector: 'app-modifenf',
  templateUrl: './modifenf.component.html',
  styleUrls: ['./modifenf.component.css']
})
export class ModifenfComponent implements OnInit {
  enf:any = {/*esm e champ fil base*/
    nom:"",
prenom:"",
datenessance:"",
etatmedical:"",
Nompere:"",
Nommere:"",
adresse:"",
profissionpere:"",
proffisionmere:"",
telpere:"",
telmere:"",
    
    
  }
  public modifierenfant: FormGroup;

 
  constructor(private route:ActivatedRoute,private router:Router,private enfService:DirecteurService,private fb: FormBuilder,private toast:TService) {
    let formControls = {
      nom : new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      prenom : new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]), etatmedical : new FormControl('',[
        Validators.required,
    

      ]), datenessance : new FormControl('',[
        Validators.required,
      ]), profissionpere : new FormControl('',[
        Validators.required,
      ]), proffisionmere : new FormControl('',[
        Validators.required,
      ]), Nommere : new FormControl('',[
        Validators.required,
      ]), Nompere : new FormControl('',[
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
       adresse : new FormControl('',[
        Validators.required,
      ]),
      dateinscrit: new FormControl('',[
        Validators.required,
      ]),
      userparent: new FormControl('',[
      ]),
      cinparent : new FormControl('',[
        Validators.required,
       Validators.minLength(8),
         Validators.maxLength(8),
         Validators.pattern("^[0-9]*$")

         

      ]),
    }
    this.modifierenfant = this.fb.group(formControls);
  } 
  get nom(){
    return this.modifierenfant.get('nom')
  }
  get adresse(){
    return this.modifierenfant.get('adresse')
  } 
   get Nommere(){
    return this.modifierenfant.get('Nommere')
  } 
   get Nompere(){
    return this.modifierenfant.get('Nompere')
  } 
   get etatmedical(){
    return this.modifierenfant.get('etatmedical')
  } 
   get datenessance(){
    return this.modifierenfant.get('datenessance')
  } 
   get prenom(){
    return this.modifierenfant.get('prenom')
  }
  get proffisionmere(){
    return this.modifierenfant.get('proffisionmere')
  } get profissionpere(){
    return this.modifierenfant.get('profissionpere')
  } get telpere(){
    return this.modifierenfant.get('telpere')
  } get telmere(){
    return this.modifierenfant.get('telmere')
  }
  get dateinscrit(){
    return this.modifierenfant.get('dateinscrit')
  }
  get cinparent(){
    return this.modifierenfant.get('cinparent')
  }
  ngOnInit() {
    this.getenf()
  }
  myUser:any
  enf2:any
  getenf(){
    


    let id=this.route.snapshot.paramMap.get("id")

    this.enfService.getbyid(id).subscribe(res=>{
      this.enf2=res
      let data:any=res
      console.log(data)
      this.modifierenfant.patchValue({
        nom:data["nom"],
        prenom:data["prenom"],
        datenessance:data["datenessance"],
        Nommere:data["Nommere"],
        Nompere:data["Nompere"],
        etatmedical:data["etatmedical"],
        proffisionmere:data["proffisionmere"],
        profissionpere:data["profissionpere"],
        telpere:data["telpere"],
        telmere:data["telmere"],
        adresse:data["adresse"],
        dateinscrit:data["dateinscrit"],
        cinparent:data["cinparent"],
        userparent:data["userparent"]
        
            })
     
            let aaa:any=[]
            let d :any
            this.enfService.gettinfuser().subscribe(res=>{
             aaa=res
             this.myUser = aaa.filter(u => u.username == data.cinparent)[0]
            console.log(this.myUser)
            })
    });
    
  }
  
  modif()
  {
    let id=this.route.snapshot.paramMap.get("id")
    let data = this.modifierenfant.value;
    let x=data.userparent
    console.log(data)
    console.log()
this.enfService.getallenfs().subscribe(res=>{
  let enfs:any=[]
  enfs=res
  
  if(this.enf2!=data){
    let myUser = enfs.filter(u => u.nom == data.nom && u.prenom == data.prenom && u.datenessance == data.datenessance && u.Nompere == data.Nompere &&this.enf2.nom != data.nom && this.enf2.prenom != data.prenom && this.enf2.datenessance != data.datenessance && this.enf2.Nompere != data.Nompere )
    console.log(myUser)
    if(myUser.length>0){
      this.toast.showErrorToast("هدا الطفل موجود")
    }
    else {
      this.enfService.modif(id,data).subscribe(res=>{
        /*
        console.log(res)
        let user2={
          username:'',
          password:'',
          email:''
        }
    this.enfService.getuser(x).subscribe(res=>{
    let d:any=res
    d.username=data.cinparent
    d.password=data.telpere
    d.pass2=data.telpere
    
        this.enfService.putuser(x,d).subscribe()
    })
    /*
        user2.username=data.cinparent
        user2.password=data.telpere
        this.enfService.putuser2(this.myUser.id,user2).subscribe()
    
    */
    
    
        this.router.navigate(['listeenfants'])
    
    
      });
    }
  }

})

    
    

    

}
mdfclub(){
  let id=this.route.snapshot.paramMap.get("id")

  this.router.navigate(['affectertoclub',id])

}
mdfclasse(){
  let id=this.route.snapshot.paramMap.get("id")

  this.router.navigate(['affecterclasse',id,false])
}
mdfRG(){
  let id=this.route.snapshot.paramMap.get("id")

  this.router.navigate(['choixregime',id,false])
}
}
