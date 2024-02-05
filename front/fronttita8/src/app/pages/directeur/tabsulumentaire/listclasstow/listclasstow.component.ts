import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';
import Swal from 'sweetalert2';
import { classetow } from './classetow';

@Component({
  selector: 'app-listclasstow',
  templateUrl: './listclasstow.component.html',
  styleUrls: ['./listclasstow.component.css']
})
export class ListclasstowComponent implements OnInit {
  ch="هدا القسم ليس له مدرس(ة)"
ch1="إختيار مدرس(ة)"
@ViewChild(MatPaginator,{ static: false }) paginator: MatPaginator;

  constructor(private route:Router,private enfService:DirecteurService) { }

  ngOnInit() {
    this.listactivite()

  }
  public displayedColumns = [ 'niveau','nom','maitresse','nb','details','update','supprimer']

  public dataSource = new MatTableDataSource<classetow>();
  las:any=[]
  nb:number
listactivite(){
  let annee:any=[]
  let enfs:any=[]

  let ans:any
  this.enfService.anneescolaire().subscribe(res => {
    annee=res
        ans=annee[annee.length-1]["id"]
  this.enfService.classe().subscribe(res => {
    this.las=res
    console.log(this.las)
    this.las = this.las.filter(u => u.anneescolaire.id == ans)

    this.las.forEach(element => {
      let tabnb:any=[]
      if(element.niveau.id==1)
      element.niveau="ثلاثة سنوات"
      if(element.niveau.id==2)
      element.niveau=" أربعة سنوات"
      if(element.niveau.id==3)
      element.niveau="خمسة سنوات"
      this.enfService.getmbyid(element["maitresse"]).subscribe(res=>{
        element["maitresse"]=res["prenom"] + " " + res["nom"]
        console.log(this.las);
        
      })
      this.enfService.getallenfs().subscribe(res=>{
        enfs=res
        console.log(enfs)
         tabnb= enfs.filter(u => u.classe == element.id)
         console.log(tabnb)

element["nb"]=tabnb.length
      })
    })
    this.dataSource= new MatTableDataSource<classetow>(this.las);
    this.dataSource.paginator = this.paginator;

  })
})
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

  Swal.fire({
    title: ' هل انت متأكد من حذف هذا القسم    ',
    text: '',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'تعم!',
    cancelButtonText: 'لا'
  }).then((result) => {
    if (result.isConfirmed) {

     
  this.enfService.deleteclasse(d.id).subscribe(res=>{
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

}
