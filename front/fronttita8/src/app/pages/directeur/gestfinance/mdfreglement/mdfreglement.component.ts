import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-mdfreglement',
  templateUrl: './mdfreglement.component.html',
  styleUrls: ['./mdfreglement.component.css']
})
export class MdfreglementComponent implements OnInit {
  frais:any={
    nivfrais:"",
    typeregime:""
  }
  public modifierfais: FormGroup;
  enf:any
    constructor(private route:ActivatedRoute,private router:Router,private enfService:DirecteurService,private fb: FormBuilder) {
      let formControls = {
       
  
        montantreglemaiment : new FormControl('',[
          Validators.required,
         
            Validators.pattern("^[0-9]*$")
        ]),
        datereglemaiment:  new FormControl('',[
          Validators.required,
         
            Validators.pattern("^[0-9]*$")
        ]),
      
      }
      this.modifierfais = this.fb.group(formControls);
    } 
    get datereglemaiment(){
      return this.modifierfais.get('datereglemaiment')
    }
    get montantreglemaiment(){
      return this.modifierfais.get('montantreglemaiment')
    }
  tnb:boolean=false
    ngOnInit() {
  
      let id=this.route.snapshot.paramMap.get("id")
      this.getreglement(id)
    }
  getreglement(id){
  this.enfService.reglementbyid(id).subscribe(res=>{
  this.frais=res

  console.log(res)
  this.modifierfais.patchValue({
    montantreglemaiment:res["montantreglemaiment"],
    datereglemaiment:res["datereglemaiment"],
  
  })

  })
  
  }
  modif(){
    let id=this.route.snapshot.paramMap.get("id")

    this.enfService.reglementbyid(id).subscribe(res=>{
      let enf=res
      let data = this.modifierfais.value;
      this.enfService.mdfreglementbyid(id,data).subscribe(res=>{
        console.log(res)
  
        this.router.navigate(['payment/paymentenf',id])
    
    
      });
    })
    
 
  }
  }
  