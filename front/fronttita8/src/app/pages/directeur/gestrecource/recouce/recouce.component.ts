import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';
import Swal from 'sweetalert2';
import { charge } from './charge';

@Component({
  selector: 'app-recouce',
  templateUrl: './recouce.component.html',
  styleUrls: ['./recouce.component.css']
})
export class RecouceComponent implements OnInit {
charges:any=[]
public displayedColumns = ['nom','datepaycharge','pycejointe','montant','details', 'update','supprimer']
// public displayedColumns2 = ['nom','prixactivite','dateactivite','details', 'update',]
@ViewChild(MatPaginator,{ static: false }) paginator: MatPaginator;

 public dataSource = new MatTableDataSource<charge>();
  constructor(private enfService:DirecteurService, private router:Router) {  }

  ngOnInit() {
    this.getallcharges()
  }
getallcharges(){
  this.enfService.charges().subscribe(res => {
      this.charges=res
        console.log(this.charges)
        this.dataSource = new MatTableDataSource<charge>(this.charges);
        this.dataSource.paginator = this.paginator;

  })
}
ajtcharge(){
  this.router.navigate(["ajoutercharge"])
}
modifierercharge(dataItem){
  this.router.navigate(["modifierercharge",dataItem.id])
}
public doFilter = (value: string) => {
  //   this.dataSource.filter = value.trim().toLocaleLowerCase();
  value = value.trim().toLocaleLowerCase();
  this.dataSource.filter=value
   }
   suppclub(dataItem){
    Swal.fire({
      title: ' هل انت متأكد من حذف هذه المصاريف   ',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'تعم!',
      cancelButtonText: 'لا'
    }).then((result) => {
      if (result.isConfirmed) {
  
        this.enfService.deletechargebyid(dataItem.id).subscribe(res=>{
          window.location.reload()
        })
      
      } else if (result.dismiss === Swal.DismissReason.cancel) {
    
      }
    })






   }
}
