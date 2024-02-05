import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';
import {MatIconModule} from '@angular/material/icon';
import Swal from 'sweetalert2';
import { enseignant } from '../../gestens/listens/enseignant';
@Component({
  selector: 'app-listens2',
  templateUrl: './listens2.component.html',
  styleUrls: ['./listens2.component.css']
})
export class Listens2Component implements OnInit {
  enf: any = {/*esm e champ fil base*/
    nom: "",
    prenom: "",
    datenessance: "",
    etatmedical: "",
    Nompere: "",
    Nommere: "",
    adresse: "",
    profissionpere: "",
    proffisionmere: "",
    telpere: "",
    telmere: "",


  }
  ens: any = []
  constructor(private route: Router, private enfService: DirecteurService) { }
  c: any

  fn: ""
  ds: ""
  nomprenom = ""
  datenessance = ""
  classe: any
  public displayedColumns = ['prenom','nom','nationalite','datenessance','cin','nvscolaire','specialite','tel','adresse','dateemb','details', 'update','supprimer']
  public dataSource = new MatTableDataSource<enseignant>();
  @ViewChild(MatPaginator,{ static: false }) paginator: MatPaginator;

  
  ngOnInit(): void {
    this.getall();
  }

  ensa: any = []
  enspa: any = []
  getall() {
    
    this.enfService.getm().subscribe(res => {
      this.ens = res
      for (let index = 0; index < this.ens.length; index++) {
        const element = this.ens[index];
        console.log(element)
        this.enfService.classebyid(element["classe"]).subscribe(res => {
          this.classe = res
          this.c = ''
          if (res["niveau"] == 1) {
            this.c = "ثلاث سنوات " + res["nom"]
          } else
            if (res["niveau"] == 2) {
              this.c = "أربعة  سنوات " + res["nom"]
            } else
              if (res["niveau"] == 3) {
                this.c = "خمسة سنوات  " + res["nom"]
              }
          console.log(this.c)
          element["classe"] = this.c
        },
        );



      }
      console.log(this.ens)
      let i = 0
      let j = 0
      this.ens.forEach(element => {
        if (element["actif"] == true) {
          this.ensa[i] = element
          i++
        }
        else {
          this.enspa[j] = element
          j++
        }
      });




      this.dataSource=new MatTableDataSource<enseignant>(this.ens)
      this.dataSource.paginator = this.paginator;



    }, err => alert(" afficg mait echek" + err)
    );
  }
  toajtens() {
    this.route.navigate(["ajoutens"])
  }
  /*detailenfant(dataItem){
    console.log("id ="+dataItem.nomprenom)
    console.log("dataitem:"+ dataItem)
     this.enfService.getbyid(dataItem.id).subscribe(res => {
      console.log(res);
       this.enfs=res
      }, err => alert(" afficg enf echek"+ err)
      );
 
*/
  detailens = (dataItem) => {

    this.route.navigate(["detailens", dataItem.id])
  }
  editClick(dataItem) {

    this.route.navigate(["/modifierens", dataItem.id])
  }
  deleteClick(dataItem) {
    confirm()
    this.enfService.supp(dataItem.id).subscribe(res => {
      console.log("oooo" + res);
    }, err => alert(" sup enf echek" + err)

    );
    //   this.getall()
  }

  getclasse(id: any): string {
    this.enfService.classebyid(id).subscribe(res => {
      this.classe = res
      this.c = ""
      if (res["niveau"] == 1) {
        this.c = "ثلاث سنوات " + res["nom"]
      } else
        if (res["niveau"] == 2) {
          this.c = "أربعة  سنوات " + res["nom"]
        } else
          if (res["niveau"] == 3) {
            this.c = "خمسة سنوات  " + res["nom"]
          }
      console.log(this.c)
      return this.c
    }, err => alert(" afficg enf echek" + err)
    );
    console.log(this.c)

    return this.c
  }
  delete(d){

    Swal.fire({
      title: 'هل انت متأكد من حذف هذا المدرس(ة)  ',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'تعم!',
      cancelButtonText: 'لا'
    }).then((result) => {
      if (result.isConfirmed) {
  
        this.enfService.deleteuser(d.user).subscribe(res=>{
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