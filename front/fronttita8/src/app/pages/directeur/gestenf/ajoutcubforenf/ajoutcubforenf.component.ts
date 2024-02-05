import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';
import { TService } from 'src/app/service/t.service';

@Component({
  selector: 'app-ajoutcubforenf',
  templateUrl: './ajoutcubforenf.component.html',
  styleUrls: ['./ajoutcubforenf.component.css']
})
export class AjoutcubforenfComponent implements OnInit {

  CLUB:any=[]
  classe:any
  tab:any=[]
  niveauselected:any
classeselected:any=[]
annee:any=[]
ans:any
enf:any
b:false
classeText:any
ReadOnlyStyleGuideNotes: boolean;

    constructor(  private enfantservice:DirecteurService,private route:ActivatedRoute,private router:Router,private toast:TService) { }
    enfant:any
    ngOnInit(): void {
    this.change()
  //  this.getclasse()
   // this.xxx()
   // this.aaa()
   this.ann()
   this.clubforenf()
this.ReadOnlyStyleGuideNotes = true;
let id=this.route.snapshot.paramMap.get("id")

  this.enfantservice.getbyid(id).subscribe(res=>{
    this.enfant=res
  })
    }
    ann(){
      this.enfantservice.anneescolaire().subscribe(res => {
        this.annee=res
            this.ans=this.annee[this.annee.length-1]["id"]
            console.log(this.ans)  

      });
    }
    change(){
    this.enfantservice.clubs().subscribe(res=>{
  
  this.CLUB=res
  this.CLUB.forEach(element => {
    element["ac"]="b"
  });
  console.log(this.CLUB)
  let l:any=[]
  let l1:any=[] // l1 fih les id mtaa les club l mcherek fih l enfant
  let l2:any=[]// l2 fih les clubs l kil
  let id=this.route.snapshot.paramMap.get("id")
  this.enfantservice.clubsenf().subscribe(res => {
    l=res
    l.forEach(element => {
      if (element.enfant==id) {
        l1.push(element)
      }
    });
    this.enfantservice.clubs().subscribe(res => {
      l2=res
      l1.forEach(elt => {
        l2.forEach(e => {
          if (e.id==elt.club) {
            this.l3.push(e)
          }
        });
      });
          console.log(this.l3)
          console.log(this.CLUB)
  
          this.CLUB.forEach(i => {
            this.l3.forEach(j => {
            if (i["id"]==j["id"]) {
              i["aff"]="o"
            }
            })
          })
  
  })
       }), err => alert(" echek niv enf"+ err)
      })
 
  }
l3  :any=[]
  clubforenf(){
    let l:any=[]
    let l1:any=[] // l1 fih les id mtaa les club l mcherek fih l enfant
    let l2:any=[]// l2 fih les clubs l kil
    let id=this.route.snapshot.paramMap.get("id")
  
    this.enfantservice.clubs().subscribe(res => {
      l2=res
      l1.forEach(elt => {
        l2.forEach(e => {
          if (e.id==elt.club) {
            this.l3.push(e)
          }
        });
      });
          console.log(this.l3)
          console.log(this.CLUB)

          
          this.CLUB.forEach(i => {
            this.l3.forEach(j => {
            if (i["id"]==j["id"]) {
              i["aff"]="o"
            }
            })
          })
          console.log(this.CLUB)

  })
  }
  affecter(){
let l:any=[]
let l1:any=[] // l1 fih les id mtaa les club l mcherek fih l enfant
let l2:any=[]// l2 fih les clubs l kil
let id=this.route.snapshot.paramMap.get("id")

    this.enfantservice.clubsenf().subscribe(res => {
      l=res
      l.forEach(element => {
        if (element.enfant==id) {
          l1.push(element)
        }
      });
      this.enfantservice.clubs().subscribe(res => {
          l2=res
          l1.forEach(elt => {
            l2.forEach(e => {
              if (e.id==elt.club) {
                this.l3.push(e)
              }
            });
          });
              console.log(this.l3)
              this.CLUB.forEach(i => {
                this.l3.forEach(j => {
                if (i["id"]==j["id"]) {
                  i["aff"]="o"
                }
                })
              })
      })
  
  })
    console.log(this.CLUB)

    let tab:any=[]
    let i=0
    this.enfantservice.clubs().subscribe(res=>{
  
    let id=this.route.snapshot.paramMap.get("id")
   console.log(this.CLUB)
  
  
this.CLUB.forEach(element => {
  let data={
  }
  data["enfant"]=id
  data["club"]=element.ac
  console.log(data)

if (  data["club"]=="a") {
  data["club"]=element.id
this.enfantservice.aclubsenf(data).subscribe(res=>{
  console.log(res)
}); 
}

});
  })
  
  }

ajoutclub(dataItem){
  let data={
  }
  let id=this.route.snapshot.paramMap.get("id")

  data["enfant"]=id
  data["club"]=dataItem.id
  console.log(data)


this.enfantservice.aclubsenf(data).subscribe(res=>{
  this.toast.showSuccessToast("تم التسجيل بنجاح")

  console.log(res)

  window.location.reload();

}); 

  }
  suppclub(dataItem){
    console.log(dataItem)

    let id=this.route.snapshot.paramMap.get("id")
    let l:any=[]
    let elt:any
    this.enfantservice.clubsenf().subscribe(res => {
      l=res
      console.log(l)

      l.forEach(element => {
        if (element.enfant==id && element.club==dataItem.id) {
          elt=element
        }

      });
      console.log(elt)
      this.enfantservice.suppclubsenf(elt.id).subscribe(res => {
        this.toast.showSuccessToast("تم الإعفاء بنجاح")

          console.log(res)
          window.location.reload();      })

    }) 
  } 
}