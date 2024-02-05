import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ajtreglementactivite',
  templateUrl: './ajtreglementactivite.component.html',
  styleUrls: ['./ajtreglementactivite.component.css']
})
export class AjtreglementactiviteComponent implements OnInit {

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
act:any
  ngOnInit() {
    this.verif()
    this.information()
  }
  pp:number
information(){
  let id = this.route.snapshot.paramMap.get("id")
let m= this.route.snapshot.paramMap.get("m")
this.enfService.  getactivite(m).subscribe(res=>{
this.act=res
console.log(this.act)
})


let tab:any=[]


    this.enfService.getbyid(id).subscribe(res => {
      this.enf = res
      console.log(this.enf)
    
      
 
    })

}
ans:any=[
]
annnee:any
t:boolean
ajtreglement(){
  let m= this.route.snapshot.paramMap.get("c")
  let id= this.route.snapshot.paramMap.get("id")
  this.enfService.anneescolaire().subscribe(res => {
    this.ans=res
        console.log(this.ans[this.ans.length-1])  
        this.annnee=this.ans[this.ans.length-1]

        this.enfService.getbyid(id).subscribe(res => {
          let enf: any
          enf = res
          console.log(enf)
          let reg=this.myForm.value
          reg.enfant=enf.id
          let ch="act&"+ this.act.id
          reg.moisreglemaiment=ch
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
              this.router.navigate(["payment/paymentenf",id])
               console.log(res)
            }), err => alert(" echek register enf"+ err)
          }
          
        
        })
})
 
 
}
verif(){
  let id = this.route.snapshot.paramMap.get("id")
  let m= this.route.snapshot.paramMap.get("m")
  let ch="act&"+m
  this.enfService.anneescolaire().subscribe(res => {
    this.ans=res
  this.enfService.reglement().subscribe((res:any) => {
    let rgsenf: any = [] //les reglement l kol mtaa enfant
    res.forEach(element => {
      let x =new Date(Date.parse(element.datereglemaiment)).getTime();

      let y =new Date(Date.parse(this.ans[this.ans.length-1]["date_deb"])).getTime();
      let z =new Date(Date.parse(this.ans[this.ans.length-1]["date_fin"])).getTime();
      if (element.enfant == id  && x>y  && x<z) {
        rgsenf.push(element)
      }
    });
    console.log(rgsenf)
    let a:any

    rgsenf.forEach(element => {
    
      if(ch==element.moisreglemaiment)
{
  this.router.navigate(["payment/paymentenf",id])

}
        })
         
  


  })
  })
}
}
