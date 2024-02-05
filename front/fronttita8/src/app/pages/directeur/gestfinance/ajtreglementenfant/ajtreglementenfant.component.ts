import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ajtreglementenfant',
  templateUrl: './ajtreglementenfant.component.html',
  styleUrls: ['./ajtreglementenfant.component.css']
})
export class AjtreglementenfantComponent implements OnInit {

  constructor(private enfService: DirecteurService, private router: Router, private route: ActivatedRoute,private fb: FormBuilder, private datePipe: DatePipe) { 

    let formControls = {
      montantreglemaiment : new FormControl('',[
        Validators.required,
      ]), 
      datereglemaiment : new FormControl('',[
        Validators.required,
     

      ]),
    
      enfant:new FormControl(),
      frais:new FormControl(),
      moisreglemaiment:new FormControl(),

    }
    
    this.myForm = this.fb.group(formControls);
  }
  get montantreglemaiment()
  {
    return this.myForm.get('montantreglemaiment')
  }
  get datereglemaiment()
  {
    return this.myForm.get('datereglemaiment')
  }
m:any
enf:any
e:any
rgh:any
frais:any
public myForm: FormGroup;
c:any
tt:boolean=false
ttt:boolean=false
mt
  ngOnInit() {
   // this.verif()
    this.information()

    let id = this.route.snapshot.paramMap.get("id")
    let m= this.route.snapshot.paramMap.get("m")
    let c= this.route.snapshot.paramMap.get("c")
    let ch=m +" "+ c
    console.log(ch)
  this.enfService.anneescolaire().subscribe(res => {
    this.ans=res
  this.enfService.reglement().subscribe((res:any) => {
    let rgsenf: any = [] //les reglement l kol mtaa enfant
    res.forEach(element => {
      let x =new Date(Date.parse(element.datereglemaiment)).getTime();

      let y =new Date(Date.parse(this.ans[this.ans.length-1]["date_deb"])).getTime();
      let z =new Date(Date.parse(this.ans[this.ans.length-1]["date_fin"])).getTime();
      if (element.enfant == id  && x>y  && x<z ) {
        rgsenf.push(element)
      }
    });

    console.log(rgsenf)
    console.log(c)

    rgsenf.forEach(element => {
      let x=element.moisreglemaiment
    
      if(ch==element.moisreglemaiment)
{
  this.router.navigate(["payment/paymentenf",id])

}
        })
  })
})
  }
  pp:number
information(){
  let id = this.route.snapshot.paramMap.get("id")
let m= this.route.snapshot.paramMap.get("m")
let c= this.route.snapshot.paramMap.get("c")
if(m=="null"){
  
  let mm: number = parseInt(c)

  let m:string
  switch (mm) {
   case 0:
     m="الترسيم"
     this.ttt=true
     break;
   case 9:
     m="شهر سبتمبر"
     break;
     case 10:
      m="شهر أكتوبر"
      break; 
      case 11:
      m="شهر نوفمبر"
      break; case 12:
      m="شهر ديسمبر"
      break; case 1:
      m="شهر جانفي"
      break; case 2:
      m="شهر فيفري"
      break; case 3:
      m="شهر مارس"
      break; case 4:
      m="شهر أفريل"
      break; case 5:
      m="شهر ماي"
      break; case 6:
      m="شهر جوان"
      break;
 
   default:
     break;

 }
 this.m=m
  this.tt=true
  if(c=="الترسيم"){
   
  }
}
  else{

    this.tt=false
    let mmm:string

    let mm: number = parseInt(c)
switch (mm) {
 case 0:
   mmm="الترسيم"
   break;
 case 9:
  mmm="شهر سبتمبر"
   break;
   case 10:
    mmm="شهر أكتوبر"
    break; 
    case 11:
      mmm="شهر نوفمبر"
    break; case 12:
    mmm="شهر ديسمبر"
    break; case 1:
    mmm="شهر جانفي"
    break; case 2:
    mmm="شهر فيفري"
    break; case 3:
    mmm="شهر مارس"
    break; case 4:
    mmm="شهر أفريل"
    break; case 5:
    mmm="شهر ماي"
    break; case 6:
    mmm="شهر جوان"
    break;

 default:
   break;

}
    this.enfService.clubbyid(m).subscribe(res=>{
      let x:any=res
let nom=x.nom

      this.m= "نادي "+ nom+" "+mmm
      this.pp=x.prix
      console.log(this.pp)
      console.log(this.m)
      let tab:any=[]

  console.log(id)
  console.log(m)//CLUB
  console.log(c)//CH

  console.log(this.m)
    this.enfService.getbyid(id).subscribe(res => {
      this.enf = res
      console.log(this.enf)
      this.enfService.fraisbyid(this.enf.regimehoraire).subscribe(res => {
        this.frais = res
           console.log(this.frais)
      })
      
      this.enfService.rhnyid(this.enf.regimehoraire).subscribe(res => {
      
        this.rgh = res
           console.log(this.rgh)
      })
      this.enfService.classebyid(this.enf.classe).subscribe(res => {
        let classe: any
        classe = res
        let nv = classe.niveau
        //    console.log(nv)
        this.enfService.frais().subscribe(res => {
          let frs: any = []
          frs = res
          for (let index = 5; index < frs.length; index++) {

            const element = frs[index];
            let ch = element["typefrais"]
            let l = ch.length
            let ch1 = ch[l - 1]
            let x = Number(ch1) - 2
            // console.log(x)
            if (x == nv) {
              this.e = element
               console.log(this.e)
this.mt=this.e.montant
            }
        
          }
         
         

         
          
        })
      })
    })
    })
  }


let tab:any=[]

  console.log(id)
  console.log(m)//CLUB
  console.log(c)//CH

  console.log(this.m)
    this.enfService.getbyid(id).subscribe(res => {
      this.enf = res
      console.log(this.enf)
      this.enfService.fraisbyid(this.enf.regimehoraire).subscribe(res => {
        this.frais = res
           console.log(this.frais)
      })
      
      this.enfService.rhnyid(this.enf.regimehoraire).subscribe(res => {
      
        this.rgh = res
           console.log(this.rgh)
      })
      this.enfService.classebyid(this.enf.classe).subscribe(res => {
        let classe: any
        classe = res
        let nv = classe.niveau
        //    console.log(nv)
        this.enfService.frais().subscribe(res => {
          let frs: any = []
          frs = res
          for (let index = 5; index < frs.length; index++) {

            const element = frs[index];
            let ch = element["typefrais"]
            let l = ch.length
            let ch1 = ch[l - 1]
            let x = Number(ch1) - 2
            // console.log(x)
            if (x == nv) {
              this.e = element
               console.log(this.e)
this.mt=this.e.montant
            }
        
          }
         
         

         
          
        })
      })
    })

}
ans:any=[
]
annnee:any
t:boolean
ajtreglement(){
  let m= this.route.snapshot.paramMap.get("m")
  let c= this.route.snapshot.paramMap.get("c")
    let id= this.route.snapshot.paramMap.get("id")
  this.enfService.anneescolaire().subscribe(res => {
    this.ans=res
        console.log(this.ans[this.ans.length-1])  
        this.annnee=this.ans[this.ans.length-1]

        this.enfService.getbyid(id).subscribe(res => {
          let enf: any
          enf = res
          console.log(enf)
          if(m!="الترسيم"){
            this.enfService.fraisbyid(enf.regimehoraire).subscribe(res => {
              let frais: any
              frais = res
              //     console.log(frais)
              let reg=this.myForm.value
              reg.enfant=enf.id
              reg.enfant=enf.id
              let aux1=m+ " " + c
              reg.moisreglemaiment=aux1
          
            let x =new Date(Date.parse(reg.datereglemaiment)).getTime();
            let y =new Date(Date.parse(this.ans[this.ans.length-1]["date_deb"])).getTime();
            let z =new Date(Date.parse(this.ans[this.ans.length-1]["date_fin"])).getTime();


              if(x<y || x>z ||reg.montantreglemaiment<=0 ){
                alert("date errone ou montant invalid")
              }else {
                let regs:any=[]
this.enfService.reglement().subscribe(r=>{
regs=r
console.log(regs)

console.log(reg)
if(regs.length>0){
  let i=0
 this.t=false
 /*
      while ( regs[i]["moisreglemaiment"]!=reg["moisreglemaiment"] && regs[i]["enfant"]!=reg["enfant"]  && i<=regs.length)  {
        i++
      }
      if ( regs[i]["moisreglemaiment"]==reg["moisreglemaiment"] && regs[i]["enfant"]==reg["enfant"]&& i<=regs.length)  {
        this.t=true
      }
      */
      if (this.t==false) {

     this.enfService.ajtreglement(reg).subscribe(res=>{
      this.router.navigate(["payment/paymentenf/",id])
      console.log(res)
        }), err => alert(" echek register enf"+ err) 
        
      }
      else {
        alert ("existe")
      }
}
else{
  this.enfService.ajtreglement(reg).subscribe(res=>{
    this.router.navigate(["payment/paymentenf/",id])
    console.log(res)
  }), err => alert(" echek register enf"+ err) 
}


})
            
            }
            })
          }else {
            this.enfService.classebyid(enf.classe).subscribe(res => {
              let classe: any
              classe = res
              let nv = classe.niveau
              //    console.log(nv)
              this.enfService.frais().subscribe(res => {
                let frs: any = []
                frs = res
                for (let index = 5; index < frs.length; index++) {
      
                  const element = frs[index];
                  let ch = element["typefrais"]
                  let l = ch.length
                  let ch1 = ch[l - 1]
                  let x = Number(ch1) - 2
                  // console.log(x)
                  if (x == nv) {
                    this.e = element
                     console.log(this.e)
      
                  }
              
                }
                let reg=this.myForm.value
                reg.enfant=enf.id
                reg.moisreglemaiment=this.m
                    console.log(this.e)
                reg.frais=this.e.id
                console.log(this.annnee)
                console.log(reg.datereglemaiment)
                let x =new Date(Date.parse(reg.datereglemaiment)).getTime();
                let y =new Date(Date.parse(this.ans[this.ans.length-1]["date_deb"])).getTime();
                let z =new Date(Date.parse(this.ans[this.ans.length-1]["date_fin"])).getTime();
    
                if(x<y || x>z ||reg.montantreglemaiment<=0 ){
                  alert("date errone")
                }else {
                  let id= this.route.snapshot.paramMap.get("id")

                  this.enfService.ajtreglement(reg).subscribe(res=>{
                    this.router.navigate(["payment/paymentenf/",id])
                    console.log(res)
                  }), err => alert(" echek register enf"+ err)
                }
                
              })
            })
          }
        
        })
})
 
 
}
verif(){
  let id = this.route.snapshot.paramMap.get("id")
  let m= this.route.snapshot.paramMap.get("m")
  let c= this.route.snapshot.paramMap.get("c")



}
}
