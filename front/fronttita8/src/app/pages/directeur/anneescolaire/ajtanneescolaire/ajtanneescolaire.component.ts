import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-ajtanneescolaire',
  templateUrl: './ajtanneescolaire.component.html',
  styleUrls: ['./ajtanneescolaire.component.css']
})
export class AjtanneescolaireComponent implements OnInit {

  constructor(  private enfantservice:DirecteurService,private route:ActivatedRoute,private router:Router,private fb: FormBuilder) {
    let formControls = {
      date_deb : new FormControl('',[
        Validators.required,
       
      ]),
      date_fin : new FormControl('',[
        Validators.required,
       
      ])
   } 
   this.formajoutannee = this.fb.group(formControls);

  }
  get date_deb(){
    return this.formajoutannee.get('date_deb')
  } 
  get date_fin(){
    return this.formajoutannee.get('date_fin')
  } 
annee:any
public formajoutannee: FormGroup;
  ngOnInit() {
  }

  ajtannee(){
    let ans:any=[]
    this.enfantservice.anneescolaire().subscribe(res=>{
      ans=res
      let datedeb =new Date(Date.parse(ans.date_deb)).getTime();
      let datefin =new Date(Date.parse(ans.date_fin)).getTime();
 








      let data = this.formajoutannee.value;
      console.log(data)
      let y =new Date(Date.parse(data.date_deb)).getTime();
      let z =new Date(Date.parse(data.date_fin)).getTime();

      if(datefin>=y){
alert(" لا يمكن إنشاء سنة دراسية")
      } else{
        if(z<y){
          alert(" يجب أن يكون تاريخ نهاية الفترة أكبرمن تاريخ بداية الفترة ")
        }
        else{
          this.enfantservice.ajtaneescolaire(data).subscribe(res=>{
            this.router.navigate([""])
            console.log(res)
          }), err => alert(" echek register enf"+ err)
        }
      }
 
    })
  
     
    }
}
