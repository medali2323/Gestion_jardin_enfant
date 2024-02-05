import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';
import { TService } from 'src/app/service/t.service';

@Component({
  selector: 'app-absanceclasse',
  templateUrl: './absanceclasse.component.html',
  styleUrls: ['./absanceclasse.component.css']
})
export class AbsanceclasseComponent implements OnInit {

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
  tab1: any = []
  listOfMonths: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  month: string[] = ["ديسمبر", "نوفمبر", "أكتوبر", "سبتمبر", "أوت", "جويلية", "جوان", "ماي", "أفريل", "مارس", "فيفري", "جانفي"]
  constructor(private route: ActivatedRoute, private enfService: DirecteurService, router: Router, private datePipe: DatePipe, public fb: FormBuilder,private toast:TService) {
    let dd = this.datePipe.transform(this.d, 'yyyy-MM-dd');
    this.dat = dd
  }
  registrationForm = this.fb.group({
    gender: ['']
  })

s:string
  get myForm() {
    return this.registrationForm.get('gender');
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id")

    this.detailclasse(id)
    this.enfsbyclaase()
    this.f1()
    if(this.databs==undefined){
              this.t=true
      this.s="الرجاء إختيار يوم"
    }
  }
  detailclasse(id) {
    this.enfService.classebyid(id).subscribe(res => {
      this.classe = res

    }, err => alert(" afficg claase echek" + err)
    );
  }
  enfsbyclaase() {
    this.enfService.getallenfs().subscribe(res => {
      this.enfs = res
      let j = 0
      for (let index = 0; index < this.enfs.length; index++) {
        const element = this.enfs[index];


        let id = this.route.snapshot.paramMap.get("id")

        if (element["classe"] == id) {
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
    let listabsupdate = []
    console.log(listabs)
    console.log(this.tab1)

    this.tab1.forEach(element => {
      let ch: any = {}
      let ch1: any = {}

      if (element.idabs == undefined) {
        if (element["abs"] == null) {
          allpresent = true
        } else
          if (element["abs"] == "a") {
            
            //ch.absant = true
            ch.dateabcence = this.databs
            ch.cause = element["cause"]
            ch.enfant = element.id
            console.log(ch)
            listabs.push(ch)


          } else
            if (element["abs"] == "p") {
              /*
              ch.aabsant = false
              ch.dateabcence = this.databs
              ch.cause = element["cause"]
              ch.enfant = element.id
              console.log(ch)
              listabs.push(ch)
              */
            }
      }
      else { //update
        if (element["abs"] == "a") {
          ch1.id = element.idabs
         // ch1.absant = true
          ch1.dateabcence = this.databs
          ch1.cause = element["cause"]
          ch1.enfant = element.id
          console.log(ch1)
          listabsupdate.push(ch1)

        }else
        if (element["abs"] == "p") {
          
          this.enfService.suppabsenf(element.idabs).subscribe(res=>{
            
          })
        //  listabsupdate.push(ch1)

        }

      }

    });
    console.log(listabs)


    // allpresent maanha mouch cheked *


    if (listabsupdate.length > 0) {
      listabsupdate.forEach(element => {

        this.enfService.putabsenf(element.id, element).subscribe(res => {
          console.log(res)

        })
      });

    }
    if (!allpresent) {
      listabs.forEach(element => {

        this.enfService.absenf(element).subscribe(res => {
          console.log(res)
        })
      });

    }
    this.tab1.forEach(element => {
      element.cause = ""
    });
    this.toast.showSuccessToast("تم تسجيل الغيابات بنجاح")
    window.location.reload()
  }


  /*
  this.enfService.absenf(data).subscribe(res=>{

  })
  */

  f1() {
    this.enfService.getallenfs().subscribe(res => {
      this.enfs = res
      let j = 0
      for (let index = 0; index < this.enfs.length; index++) {
        const element = this.enfs[index];

        let id = this.route.snapshot.paramMap.get("id")

        if (element["classe"] == id) {
          this.tab1[j] = element
          this.tab1[j]["abs"] = null
          this.tab1[j]["cause"] = ""

          j++
        }
      }
    })
    console.log(this.tab1)
  }
  annnee: any
  t: boolean = false
  ans: any = []

  loadabs() {
    let absf: any = []
    let l: any = []
    let l1: any = []
    this.enfService.anneescolaire().subscribe(res => {
      this.ans = res
      console.log(this.ans[this.ans.length - 1])
      this.annnee = this.ans[this.ans.length - 1]
      let x = new Date(Date.parse(this.databs)).getTime();

      let y = new Date(Date.parse(this.ans[this.ans.length - 1]["date_deb"])).getTime();
      let z = new Date(Date.parse(this.ans[this.ans.length - 1]["date_fin"])).getTime();
      if ( x > y && x < z) {
        this.enfService.getabsenf().subscribe(res => {
          absf = res
          console.log(absf)
          console.log(this.databs)
          if(absf.length==0){
            this.tab1.forEach(elt => {
            
                elt.abs = "p"
  
              });
            
          }
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
            elt.abs="p"
            l.forEach(element => {
              if (element.enfant == elt.id ) {
                elt.abs  = "a"
                elt.idabs = element.id
                elt.cause = element.cause
              }
           

            });
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
        this.t = false

      }
      else {
        this.toast.showErrorToast("تثبت من التاريخ")
        this.t = true

      }
    })


  }
  absenfs:any=[]
  enfss:any=[]
  imprimer(){
    let allabsance:any=[]
    let allabsancebydate:any=[]
    let myUser:any=[]
    let id = this.route.snapshot.paramMap.get("id")
    let databs = this.databs
    let enfs:any = []

    this.enfService.getallenfs().subscribe(res => {
      enfs=res
      this.enfs = enfs.filter(u => u.classe ==id)
      this.enfService.getabsenf().subscribe(res => {
  
        allabsance = res
        console.log(allabsance)
        console.log(databs)
        allabsance.forEach(element => {
          if (element.dateabcence == databs) {
            allabsancebydate.push(element)
          }
        });
        console.log(allabsancebydate)
    allabsancebydate.forEach(element => {
     myUser = enfs.filter(u => u.id == element.enfant  )
     console.log( myUser)

     if(myUser.length>0){
        this.absenfs.push(myUser[0])
  
      }
    });

    if(this.absenfs.length>0)
    window.open("printabsanceclasse/" +id +"/"+this.databs +"/" )
    else
    this.toast.showErrorToast('لا يوجد غيابات')
      })
    })
  
  
     

  
    
  
  
  
  
  
    
  }
 
}

