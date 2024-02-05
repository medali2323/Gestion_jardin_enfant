import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
 reglement2:any=[]
  charges2:any=[]

  constructor(private enfService: DirecteurService, private router: Router, private route: ActivatedRoute,private fb: FormBuilder, private datePipe: DatePipe) { 

    let formControls = {
      date_deb : new FormControl('',[
        Validators.required,
      ]), 
      date_fin : new FormControl('',[
        Validators.required,
     

      ]),
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
  }
resume(){
  let data = this.f.value;
  console.log(data)
  let charges:any=[]
  let reglement:any=[]

  this.enfService.reglement().subscribe(res=>{
    reglement=res
    console.log(reglement)
    reglement.forEach(element => {
      let x =new Date(Date.parse(element.datereglemaiment)).getTime();

      let y =new Date(Date.parse(data.date_deb)).getTime();
      let z =new Date(Date.parse(data.date_fin)).getTime();
      

      if(x>y  && x<z) {
      this.reglement2.push(element)
      }
    });
    let nbr=0.0
    console.log(this.reglement2)
    this.reglement2.forEach(element => {
      nbr=nbr+element.montantreglemaiment
    });
    console.log(nbr)
    this.enfService.charges().subscribe(res=>{
      charges=res
      console.log(charges)
      charges.forEach(element => {
        let x =new Date(Date.parse(element.datepaycharge)).getTime();
  
        let y =new Date(Date.parse(data.date_deb)).getTime();
        let z =new Date(Date.parse(data.date_fin)).getTime();
        
  
        if(x>y  && x<z) {
        this.charges2.push(element)
        }
      });
      let nb=0.0
      this.charges2.forEach(element => {
        nb=nb+element.montant
      });
      let m=nbr-nb
      console.log(m)
    })
  })
  window.open("printresume/" +data.date_deb +"/" + data.date_fin )

}
}
