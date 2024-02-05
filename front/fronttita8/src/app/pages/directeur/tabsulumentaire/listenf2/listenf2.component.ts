import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';
import {MatTableDataSource} from '@angular/material/table';

import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule,MatPaginator, MatSort, matTooltipAnimations } from '@angular/material';
import { ViewChild } from '@angular/core'
import Swal from 'sweetalert2'
import { enfant } from '../../gestenf/listenf/enfant';

@Component({
  selector: 'app-listenf2',
  templateUrl: './listenf2.component.html',
  styleUrls: ['./listenf2.component.css']
})
export class Listenf2Component implements OnInit {

  
@ViewChild (MatPaginator, {static: false}) paginator: MatPaginator;

@ViewChild(MatSort, {static: false}) sort: MatSort;

  t:boolean=false
 showAllTeachers:boolean=false
    enf:any = {/*esm e champ fil base*/
      nom:"",
  prenom:"",
  datenessance:"",
  etatmedical:"",
  Nompere:"",
  Nommere:"",
  adresse:"",
  profissionpere:"",
  proffisionmere:"",
  telpere:"",
  telmere:"",
      
      
    }
    enfs:any=[]
    c:any
         fn:""
        ds:""
        nomprenom=""
        datenessance=""
        classe:any
 data:any=[]
  public displayedColumns = ['prenom','nom','classe','datenessance','etatmedical','Nompere','Nommere','adresse','telpere','telmere','dateinscrit','details', 'update','supprimer']
 public dataSource = new MatTableDataSource<enfant>();

        constructor(private route:Router,private enfService:DirecteurService) {  }
      
        ngOnInit(): void {
       this.data = [];
       this.getall();

this.dataSource.sort=  this.sort

    }
        logout(){
         
          localStorage.removeItem('token');
          this.route.navigate(['/login'])

      }
      tab:any=[

      ]
      an:any
      tabenf:any=[]
        getall(){
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
                for (let index = 0; index < this.tabenf.length; index++) {
                  const element = this.tabenf[index];
                  let x =new Date(Date.parse(element.dateinscrit)).getTime();

                  let y =new Date(Date.parse(this.tab[this.tab.length-1]["date_deb"])).getTime();
                  let z =new Date(Date.parse(this.tab[this.tab.length-1]["date_fin"])).getTime();
                  if(x<y  || x>z) {
                    
                    element["classe"]="ليس مرسم(ة) بالسنة الدراسية الحالية"
     
                  }

             else{
              this.enfService.classebyid(element["classe"]).subscribe(res => {
                this.classe=res
                this.t=false
                this.c=""
                element["a"]=true
  
                if (res["niveau"]==1) {
                 this.c="ثلاث سنوات "+ res["nom"]
                } else
                if (res["niveau"]==2) {
                  this.c="أربعة  سنوات "+ res["nom"]
                 } else
                 if (res["niveau"]==3) {
                  this.c="خمسة سنوات  "+ res["nom"]
                 } 
                 console.log(this.c)
                 element["classe"]=this.c
                 
               }, err => {
                 this.c="ليس له قسم"
                 element["a"]=false
                 
                 element["classe"]=this.c
  
              }
               );
             }
     
     
     
                }
                this.dataSource=new MatTableDataSource<enfant>(this.tabenf)
                this.dataSource.paginator = this.paginator;


     console.log(this.enfs)
                 }, err => alert(" afficg enf echek"+ err)
                 );
        })
 
        }

        toajtenf(){
          this.route.navigate(["ajouterenfant"])
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
      detailenfant =(dataItem) =>{
      
          this.route.navigate(["detailenfant",dataItem.id])
        }
        editclick(dataItem){
      
          this.route.navigate(["modifierenfant",dataItem.id])
        }
        deleteClick(dataItem){


          Swal.fire({
            title: 'هل انت متأكد من حذف هذا الطفل  ',
            text: '',
            icon: "question",
            showCancelButton: true,
            confirmButtonText: 'تعم!',
            cancelButtonText: 'لا'
          }).then((result) => {
            if (result.isConfirmed) {
              let enfs:any=[]
              let enfsp:any=[]

              this.enfService.getallenfs().subscribe(res=>{
              enfs=res
              console.log(enfs)
              
              enfs.forEach(element => {
                if(element.userparent ==dataItem.userparent){
                  enfsp.push(element)
                }
                if(enfsp.length>1){
                  this.enfService.supp(dataItem.id).subscribe(res => {
                    window.location.reload()
                  })
                  
                }
                else if(enfsp.length==1){
                  this.enfService.supp(dataItem.userparent).subscribe(res => {
                    window.location.reload()
                  })
                }
              })
            })
            } else if (result.dismiss === Swal.DismissReason.cancel) {
          
            }
          })










    
         //   this.getall()
        }
        listenf(){
          this.route.navigate(["listeenfants"]) 
         }
         getclasse(id:any):string{
          this.enfService.classebyid(id).subscribe(res => {
            this.classe=res
            this.c=""
            if (res["niveau"]==1) {
             this.c="ثلاث سنوات "+ res["nom"]
            } else
            if (res["niveau"]==2) {
              this.c="أربعة  سنوات "+ res["nom"]
             } else
             if (res["niveau"]==3) {
              this.c="خمسة سنوات  "+ res["nom"]
             } 
             console.log(this.c)
             return this.c
           }, err => alert(" afficg enf echek"+ err)
           );
           console.log(this.c)

           return this.c
          }
        

         afftoclasse(dataItem){
          this.route.navigate(["affecterclasse",dataItem.id])

         }
         pay(dataItem){
          this.route.navigate(["paymentenf",dataItem.id])

         }
 
        public doFilter2 = (value: string) => {
          //   this.dataSource.filter = value.trim().toLocaleLowerCase();
          value = value.trim().toLocaleLowerCase();
          this.dataSource.filter=value
           }
      }
