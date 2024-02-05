import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';
import { TService } from 'src/app/service/t.service';

@Component({
  selector: 'app-ajoutercharge',
  templateUrl: './ajoutercharge.component.html',
  styleUrls: ['./ajoutercharge.component.css']
})
export class AjouterchargeComponent implements OnInit {
  r:any={
    nom:"",
    montant:0,
    pycejointe:""
    
  }
  
	public ajoutcharge: FormGroup;
  response;
  imageURL;
  cover:File
  date:any
  erreurnon=""
  erreurdate 
  erreurmontant
    constructor(private route:Router,private enfService:DirecteurService,private formBuilder: FormBuilder,private http: HttpClient,private toast:TService) { 
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
      this.ajoutcharge = this.formBuilder.group(formControls);
    }
    get nom(){
      return this.ajoutcharge.get('nom')
    } 
    get montant(){
      return this.ajoutcharge.get('montant')
    }
    get datepaycharge(){
      return this.ajoutcharge.get('datepaycharge')
    }  
  
    ngOnInit() {
    
      
    }

 
    
   
    onfileChanged(event: any) {
      this.cover = event.target.files[0];
    }
  
    ajoutecharge() {
      let data=this.ajoutcharge.value
     
      data.datepaycharge
      console.log(data)
      const uploadData = new FormData();
      uploadData.append('pycejointe', this.cover);
      uploadData.append('nom', data.nom);
      uploadData.append('montant', data.montant);
      uploadData.append('datepaycharge', data.datepaycharge);
      console.log(uploadData)
      if(data.montant<0){
        this.toast.showErrorToast(" المبلغ يجب أن يكون أكبر من صفر ")
      }else{
        let chs:any=[]
        this.enfService.charges().subscribe(res=>{
          chs=res
          let myUser = chs.filter(u => u.nom ==this.nom && u.date==this.date)
          if( myUser.length>0){
            this.toast.showErrorToast("هذه المصاريف موجودة")
          }   else{
            if(this.cover==undefined){
              this.enfService.ajtchage(data).subscribe(
                data =>{
                  console.log(data)
                  this.route.navigate(["gestressource"])
                },
                error =>{
                  console.log(error)
                  this.toast.showErrorToast("تثبت من المعطيات")
                }
              );
            }
            else{
              this.enfService.ajtchage(uploadData).subscribe(
                data =>{
                  console.log(data)
                  this.route.navigate(["gestressource"])
                },
                error =>{
                  console.log(error)
                  this.toast.showErrorToast("تثبت من المعطيات")
                }
              );
            }
            }
         
        })
  

      }
    }
  
  
  }
  