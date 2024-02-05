import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';
import Swal from 'sweetalert2';
import { activite } from '../../club/listeclub/activite';

@Component({
  selector: 'app-listactivite',
  templateUrl: './listactivite.component.html',
  styleUrls: ['./listactivite.component.css']
})
export class ListactiviteComponent implements OnInit {

  constructor(private route:Router,private enfService:DirecteurService) { }

  ngOnInit() {
    this.listactivite()
  }
  public displayedColumns = ['nom','prixactivite','dateactivite','details', 'update','supprimer']

  public dataSource = new MatTableDataSource<activite>();
  @ViewChild (MatPaginator, {static: false}) paginator: MatPaginator;

  las:any=[]
listactivite(){
  this.enfService.activite().subscribe(res => {
    this.las=res
    this.dataSource= new MatTableDataSource<activite>(this.las);
    this.dataSource.paginator = this.paginator;

  })
}
modifieractuvite(dataItem){
  this.route.navigate(["modifieractivite",dataItem.id])

}
suppactivite(d){
  Swal.fire({
    title: ' هل انت متأكد من حذف هذا النشاط    ',
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

}
