import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';
import { activite } from './activite';
import { club } from './club';
import Swal from 'sweetalert2'
import { promise } from 'selenium-webdriver';

@Component({
  selector: 'app-listeclub',
  templateUrl: './listeclub.component.html',
  styleUrls: ['./listeclub.component.css']
})
export class ListeclubComponent implements OnInit {
  public displayedColumns = ['nom','nbe','maitresse','prix','details', 'update','supprimer']
  @ViewChild (MatPaginator, {static: false}) paginator: MatPaginator;

 // public displayedColumns2 = ['nom','prixactivite','dateactivite','details', 'update',]

  public dataSource = new MatTableDataSource<club>();
 // public dataSource1 = new MatTableDataSource<activite>();

  //ch="هدا القسم ليس له مدرس(ة)"

  
ens:any
  constructor(private route:Router,private enfService:DirecteurService) { }
l:any=[]
l1:any=[]

ch="هدا النادي ليس له مدرس(ة)"
ch1="إختيار مدرس(ة)"
  ngOnInit() {

    this.listclub()


    this.listactivite()
  }
  tab:any=[]
  lf:any=[]
an:any
tabenf:any=[]
enfs:any=[]

  
listclub(){

  this.enfService.anneescolaire().subscribe(res => {
    this.tab=res
        console.log(this.tab[this.tab.length-1])  
        this.an=this.tab[this.tab.length-1]["an"]

        this.enfService.getallenfs().subscribe(res => {
          this.tabenf=res
          console.log(this.tabenf)
          console.log(this.enfs)

          this.tabenf.forEach(element => {
            let x =new Date(Date.parse(element.dateinscrit)).getTime();

            let y =new Date(Date.parse(this.tab[this.tab.length-1]["date_deb"])).getTime();
            let z =new Date(Date.parse(this.tab[this.tab.length-1]["date_fin"])).getTime();
            

            if(x>y  && x<z) {
            this.enfs.push(element)
            }
          });
          console.log(this.enfs)
        for (let index = 0; index < this.enfs.length; index++) {
          const element = this.enfs[index];
        
      



        }


console.log(this.enfs)

this.enfService.clubs().subscribe(res => {
  this.l=res
console.log(this.l)
  this.l.forEach(element => {
    let nb=0

    if (element["maitresse"]==null) {
      element["maitresse"]="هدا النادي ليس له مدرس(ة)"
    }

    this.enfService.getmbyid(element["maitresse"]).subscribe(res=>{
     element.maitresse=res["prenom"] + " " + res["nom"]
      element["mait"]=this.ens
      console.log(element["mait"])

      if (  element["mait"]==null) {
        this.ens="هدا النادي ليس له مدرس(ة)"
      }
    })


    this.enfService.clubsenf().subscribe(res => {
      this.l1=res
      this.l1.forEach(elt => {
        if (elt.club==element.id) {
          let myuser=this.enfs.filter(u=>u.id==elt.enfant)
          if(myuser.length>0)
          nb++
        }

      });











      element["nbe"]=nb

    })
  });
  console.log(this.l)
   this.dataSource = new MatTableDataSource<club>(this.l);
   this.dataSource.paginator = this.paginator;

})





         }, err => alert(" afficg enf echek"+ err)
         );
})












 


}


nbec(){
  
  
}
getenfsbyclub(id):Promise<number>{
let clubs:any=[]
let club:any
let nb:number





  return new Promise(resolve=>{
    this.enfService.clubsenf().subscribe(res => {
      clubs=res
      console.log(     clubs   )
      clubs.forEach(element => {
        if (element.club==id  ) {
          club.push(element)
        }
      });
      this.enfService.getallenfs().subscribe(res => {
       this.enfs=res
       club.forEach(element => {
         this.enfs.forEach(elt => {
           let x =new Date(Date.parse(elt.dateinscrit)).getTime();
           this.enfService.anneescolaire().subscribe(res => {
             this.tab=res
                     let y =new Date(Date.parse(this.tab[this.tab.length-1]["date_deb"])).getTime();
                     let z =new Date(Date.parse(this.tab[this.tab.length-1]["date_fin"])).getTime();
           if (element.enfant==elt.id && x>y  && x<z ) {
             this.lf.push(elt)
           }
         })
       });
       console.log(this.lf)
        nb=this.lf.length
if(nb>-1){
  resolve (nb);
}else{
  resolve(-1)

}
     })
   })
   })

})



}
detail(dataItem){
  this.route.navigate(["detailclub",dataItem.id])


}
toajtclasse(){
  this.route.navigate(["ajoutclub"])

}
modifierclub(dataItem){
  this.route.navigate(["modifierclub",dataItem.id])

}
suppclub(d){
  Swal.fire({
    title: ' هل انت متأكد من حذف هذا النادي   ',
    text: '',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'تعم!',
    cancelButtonText: 'لا'
  }).then((result) => {
    if (result.isConfirmed) {

      this.enfService.seleteclubbyid(d.id).subscribe(res=>{
        window.location.reload()
      })
    
    } else if (result.dismiss === Swal.DismissReason.cancel) {
  
    }
  })










  
 
}
afftoclub(dataItem){
  this.route.navigate(["affectermaitraissetoclub",dataItem.id])

}
toajtavtivite(){
  this.route.navigate(["ajoutactivitespecial"])

}
las:any=[]
listactivite(){
  this.enfService.activite().subscribe(res => {
    this.las=res
   // this.dataSource1 = new MatTableDataSource<activite>(this.las);

  })
}
modifieractuvite(dataItem){
  this.route.navigate(["modifieractivite",dataItem.id])

}
suppactivite(d){
  Swal.fire({
    title: 'هل انت متأكد من حذف هذا النادي  ',
    text: '',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'تعم!',
    cancelButtonText: 'لا'
  }).then((result) => {
    if (result.isConfirmed) {

      this.enfService.suppactivite(d.id).subscribe(res=>{
        window.location.reload()
      })
    
    } else if (result.dismiss === Swal.DismissReason.cancel) {
  
    }
  })




}
public doFilter = (value: string) => {
  //   this.dataSource.filter = value.trim().toLocaleLowerCase();
  value = value.trim().toLocaleLowerCase();
  this.dataSource.filter=value
   }
   public doFilter2 = (value: string) => {
    //   this.dataSource.filter = value.trim().toLocaleLowerCase();
    value = value.trim().toLocaleLowerCase();
   // this.dataSource1.filter=value
     }
}
