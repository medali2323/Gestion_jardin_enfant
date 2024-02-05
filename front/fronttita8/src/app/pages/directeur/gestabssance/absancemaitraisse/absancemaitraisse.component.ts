import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';
import { TService } from 'src/app/service/t.service';
import { ens } from './ens';

@Component({
  selector: 'app-absancemaitraisse',
  templateUrl: './absancemaitraisse.component.html',
  styleUrls: ['./absancemaitraisse.component.css']
})
export class AbsancemaitraisseComponent implements OnInit {

  b:boolean=false
  classe: any
  enfs: any = []
  tab: any = []
  d: Date = new Date();
  dat: any
  abs: any
  x: any
  databs: any
  y: any
  $xx
  s:string
  tab1: any = []
  listOfMonths: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  month: string[] = ["ديسمبر", "نوفمبر", "أكتوبر", "سبتمبر", "أوت", "جويلية", "جوان", "ماي", "أفريل", "مارس", "فيفري", "جانفي"]
  constructor(private route: ActivatedRoute, private enfService: DirecteurService, router: Router, private datePipe: DatePipe, public fb: FormBuilder ,private toast:TService) {
    let dd = this.datePipe.transform(this.d, 'yyyy-MM-dd');
    this.dat = dd
  }
  registrationForm = this.fb.group({
    gender: ['']
  })


  get myForm() {
    return this.registrationForm.get('gender');
  }

  ngOnInit() {

    this.f1()
    console.log(this.databs)
    if(this.databs==undefined){
      this.t=true
this.s="الرجاء إختيار يوم"
}
  }

  enfsbyclaase() {
    this.enfService.getm().subscribe(res => {
      this.enfs = res
      let j = 0
      for (let index = 0; index < this.enfs.length; index++) {
        const element = this.enfs[index];
element["b"]=true


        if (element["actif"] == true) {
          this.tab[j] = element

          j++
        }
      }
    })
  }
  onSubmit() {
    console.log(this.tab1)
    let allpresent = false
    let listabs = []
    let listabsupdate=[]
    console.log(listabs)
    console.log(this.tab1)

    this.tab1.forEach(element => {
      let ch: any = {}
      let ch1: any = {}

      if(element.idabs==undefined){
        if (element["abs"] == null) {
          allpresent = true
        } else
          if (element["abs"] == "a") {
           // ch.absant = true
            ch.dateabcence = this.databs
            ch.cause = element["cause"]
            ch.maitresse = element.id
            console.log(ch)
            listabs.push(ch)
  
          } else
            if (element["abs"] == "p") {
              /*
              ch.absant = false
              ch.dateabcence = this.databs
              ch.cause = element["cause"]
              ch.maitresse = element.id
              console.log(ch)
              listabs.push(ch)
              */
            }     
       }
       else
      
       {
        let ch1: any={
          id:0
        }

        if (element["abs"] == "a") {
          console.log(element.idabs)
          ch1["id"]=element.idabs
         // ch1.absant = true
          ch1.dateabcence = this.databs
          ch1.cause = element["cause"]
          ch1.maitresse = element.id
          console.log(ch1)
          listabsupdate.push(ch1)

        } else
          if (element["abs"] == "p") {
           
            this.enfService.suppabsmait(element.idabs).subscribe(res=>{
            
            })
            this.toast.showSuccessToast("تم تسجيل الغيابات بنجاح")

           // listabsupdate.push(ch1)
          }     
       }
    
    });
    console.log(listabs)
    console.log(listabsupdate)


    // allpresent maanha mouch cheked *
    if(listabs.length>0){

      if (!allpresent) {

        listabs.forEach(element => {
    
          this.enfService.absmait(element).subscribe(res=>{
            console.log(res)
    
          })
        });
        this.toast.showSuccessToast("تم تسجيل الغيابات بنجاح")

      }
    
        
      }

    if(listabsupdate.length>0){
      listabsupdate.forEach(element => {

        this.enfService.putabsmait(element.id,element).subscribe(res=>{
          console.log(res)
        })
      });
      this.toast.showSuccessToast("تم تسجيل الغيابات بنجاح")

    }
    window.location.reload()  
  }

  f1() {
    this.enfService.getm().subscribe(res => {
      this.enfs = res
      let j = 0
      for (let index = 0; index < this.enfs.length; index++) {
        const element = this.enfs[index];

        let id = this.route.snapshot.paramMap.get("id")

        if (element["actif"] == true) {
          this.tab1[j] = element
          this.tab1[j]["abs"] = null
          this.tab1[j]["b"] = false
          this.tab1[j]["cause"] = ""

          j++
        }
      }
    })
    console.log(this.tab1)
  }

ans:any
annnee:any
t:boolean=false
ens:any=[]
  loadabs() {
    let absf: any = []
    let l: any = []
    let l1: any = []
    this.enfService.anneescolaire().subscribe(res => {
      this.ans=res
      console.log(this.ans[this.ans.length-1])  
      this.annnee=this.ans[this.ans.length-1]
      let x =new Date(Date.parse(this.databs)).getTime();

              let y =new Date(Date.parse(this.ans[this.ans.length-1]["date_deb"])).getTime();
              let z =new Date(Date.parse(this.ans[this.ans.length-1]["date_fin"])).getTime();
              if (x>y  && x<z) {
                this.enfService.getabsmait().subscribe(res => {
                  absf = res
                  console.log(absf)
                  console.log(this.databs)
            
                  absf.forEach(element => {
                    if (element.dateabcence == this.databs) {
                      l.push(element)
                    }
            
                  });
                  if (l.length > 0) {
                    this.x = true
                  }
                  console.log(l)
            
                  console.log(this.tab1)
            
                  this.tab1.forEach(elt => {
                    let f = "p"
                    elt.cause=""
                    l.forEach(element => {
                      if (element.maitresse == elt.id ){
                        f = "a"
                        elt.idabs = element.id
                        elt.cause = element.cause                        
                      }
                       
            
                   
            
                    });
                    elt.abs = f
                  });
                  console.log(this.tab1)
                  /* hedha fif bug list abs mtaa l class
                  this.tab1.forEach(e => {
                  l.forEach(element => {
                    this.tab1.forEach(e => {
                      if (e.id==element.enfant) {
                        l1.push(element)
                
                      }
                    });
                  });
                    
                  });
                  console.log(l1)
                  */
                })
                this.t=false

              }
              else
              {
this.toast.showErrorToast("تثبت من التاريخ")
                this.t=true

              }
    })

  
  }
  imprimer(){
    let absens:any=[]
    let l:any=[]
    let enss:any=[]
     let databs = this.route.snapshot.paramMap.get("idc")
    let ens:any = []
    this.enfService.getm().subscribe(res => {
      ens=res
      this.enfService.getabsmait().subscribe(res => {
  
        absens = res
        console.log(absens)

        absens.forEach(element => {
          if (element.dateabcence == this.databs) {
            l.push(element)
          }
        });
    let tab:any=[]
    this.enfService.getm().subscribe(res=>{
  tab=res
  l.forEach(elt => {
  
  tab.forEach(element => {
      if(element.id==elt.maitresse){
        enss.push(element)
      }
    });
  });
  if( enss.length==0){
    this.toast.showErrorToast('لا يوجد غيابات')

  }else{
    window.open("printabsancemait/" +this.databs +"/" )

  }
    })
  
      })
    })
    }
}

