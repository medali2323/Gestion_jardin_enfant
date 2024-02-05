import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-detailclub',
  templateUrl: './detailclub.component.html',
  styleUrls: ['./detailclub.component.css']
})
export class DetailclubComponent implements OnInit {
clubs:any=[]
club:any=[]
enfs:any=[]
lf:any=[]
tab:any=[]
tab1:any=[]
showAllTeachers:boolean=false

  constructor(private route:ActivatedRoute,private enfService:DirecteurService,router:Router) {  }
clubb:any
  ngOnInit() {
    let id=this.route.snapshot.paramMap.get("id")
    this.getenfsbyclub(id)
    this.enfService.clubbyid(id).subscribe(res=>{
this.clubb=res
    })
  }
getenfsbyclub(id){

  this.enfService.clubsenf().subscribe(res => {
     this.clubs=res
     console.log(     this.clubs   )

     this.clubs.forEach(element => {
       if (element.club==id  ) {
         this.club.push(element)
       }
       
     });
     console.log(     this.club   )
     this.enfService.getallenfs().subscribe(res => {
      this.enfs=res
      
      this.club.forEach(element => {
        this.enfs.forEach(elt => {
          let x =new Date(Date.parse(elt.dateinscrit)).getTime();
          this.enfService.anneescolaire().subscribe(res => {
            this.tab=res
                    let y =new Date(Date.parse(this.tab[this.tab.length-1]["date_deb"])).getTime();
                    let z =new Date(Date.parse(this.tab[this.tab.length-1]["date_fin"])).getTime();
          if (element.enfant==elt.id && x>y  && x<z ) {
            this.lf.push(elt)
          }
          if(element.enfant==elt.id){
            this.tab1.push(elt)
          }
        })
      });
      console.log(this.lf)
      console.log(this.tab1)

    })
  })
  })
}
}
