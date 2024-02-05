import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-absenceenf',
  templateUrl: './absenceenf.component.html',
  styleUrls: ['./absenceenf.component.css']
})
export class AbsenceenfComponent implements OnInit {
ans:any=[]
absenfant:any=[]

annnee:any
enf:any
  constructor(private route:ActivatedRoute,private enfService:DirecteurService, private router:Router) {  }

  ngOnInit() {
    this.verif()
    this.abs()
    let id = this.route.snapshot.paramMap.get("id")

this.enfService.getbyid(id).subscribe(res=>{
  this.enf=res
})
  }
  
verif(){
  let enfs:any=[]
  let enfsp:any=[]
let n=localStorage.getItem("id")
this.enfService.getallenfs().subscribe(res=>{
enfs=res
console.log(enfs)

enfs.forEach(element => {
if(element.userparent ==n){
  enfsp.push(element.id)
}
});
let id=this.route.snapshot.paramMap.get("id")

console.log(enfsp)
let myUser = enfsp.filter(u =>u==id)

if(myUser.length==0){
  this.router.navigate(["parent/listenfant"])
}
})
}

abs(){
  let id=this.route.snapshot.paramMap.get("id")
  let absf: any = []
  let l: any = []
  let l1: any = []
  this.enfService.anneescolaire().subscribe(res => {
    this.ans = res
    console.log(this.ans[this.ans.length - 1])
    this.annnee = this.ans[this.ans.length - 1]

    let y = new Date(Date.parse(this.ans[this.ans.length - 1]["date_deb"])).getTime();
    let z = new Date(Date.parse(this.ans[this.ans.length - 1]["date_fin"])).getTime();
    let absenfs:any=[]
this.enfService.getabsenf().subscribe(res=>{
  absenfs=res
  this.absenfant = absenfs.filter(u => u.enfant ==id && new Date(Date.parse(u.dateabcence)).getTime() >y && u.enfant ==id && new Date(Date.parse(u.dateabcence)).getTime()<z)
  console.log(absenfs)
})
  }) 
}
}
