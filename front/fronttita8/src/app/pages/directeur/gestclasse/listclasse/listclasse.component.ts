import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';
import { classe } from './classe';

@Component({
  selector: 'app-listclasse',
  templateUrl: './listclasse.component.html',
  styleUrls: ['./listclasse.component.css']
})
export class ListclasseComponent implements OnInit {
 public dataSource=new MatTableDataSource<classe>()
  public displayedColumns = ['nom','niveau','nb','mait','details', 'update','supprimer']

  
  constructor(private route:Router,private enfService:DirecteurService) { }
  ch="هدا القسم ليس له مدرس(ة)"
ch1="إختيار مدرس(ة)"
tab:any=[]
classe:any=[]
annee:any=[]
ans:any
ens
enfs:any=[]
x:number
  ngOnInit() {
    this.ann()
    /*
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    };
    */
    }
  ann(){
    this.enfService.anneescolaire().subscribe(res => {
      this.annee=res
          this.ans=this.annee[this.annee.length-1]["id"]
          console.log(this.ans)  
          this.enfService.classe().subscribe(req=>{
            
            let cls:any=[]
            cls=req
            console.log(cls)

            cls.forEach(element => {
              if(element.anneescolaire==this.ans){
                this.classe.push(element)
              }
            });
            let j=0
           console.log(this.classe)
            for (let index = 0; index < this.classe.length; index++) {
              let nbebc=0
            const element = this.classe[index];
          
                       this.getnclasse(element)
          console.log()
          this.enfService.getallenfs().subscribe(res=>{
            this.enfs=res
          for (let index = 0; index < this.enfs.length; index++) {
            const e = this.enfs[index];
            if (e["classe"]==element["id"]) {
             nbebc++

            }
          }
          this.enfService.getmbyid(element["maitresse"]).subscribe(res=>{
            this.ens=res["prenom"] + " " + res["nom"]
            element["mait"]=this.ens
            console.log(element["mait"])

            if (  element["mait"]==null) {
              this.ens="هدا القسم ليس له معلم"
            }
          })
          if(element["anneescolaire"]==this.ans){
            this.tab[j]=element
            this.tab[j]["nb"]=nbebc
            this.tab[j]["mait"]=this.ens

            if(this.tab[j]["niveau"]==1)
            this.tab[j]["niveau"]="ثلاثة سنوات "
            if(this.tab[j]["niveau"]==2)
            this.tab[j]["niveau"]="اربعة سنوات "
            if(this.tab[j]["niveau"]==3)
            this.tab[j]["niveau"]="خمسة سنوات "
            if (this.tab[j]["mait"]==null) 
            {
              this.tab[j]["mait"]="هدا القسم ليس له معلم"
              this.tab[j]["mm"]="n"
            }
            else
            this.tab[j]["mm"]="nn"

          
            j++
          }
          
          })
        
        
        }
       console.log(this.tab)
  this.dataSource=new MatTableDataSource<classe>(this.tab)

        })

    })
    console.log(this.tab)

}
getm(id){
 
}
getnclasse(id){
 
 

}

toajtclasse(){
  this.route.navigate(["ajouterclasse"])
}
detail(dataItem){
  this.route.navigate(["detailclaase",dataItem.id])

}
mdf(dataItem){
  this.route.navigate(["modifierclasse",dataItem.id])

}
afftoclasse (dataItem){
  this.route.navigate(["affectemait",dataItem.id])

}
delete(d){
  this.enfService.deleteclasse(d.id).subscribe(res=>{
    window.location.reload()
  })
}
public doFilter = (value: string) => {
  //   this.dataSource.filter = value.trim().toLocaleLowerCase();
  value = value.trim().toLocaleLowerCase();
  this.dataSource.filter=value
   }
}