import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';
import {MatTableDataSource} from '@angular/material/table';
import { enfant } from './enfant';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule,MatPaginator, MatSort, matTooltipAnimations } from '@angular/material';
import { ViewChild } from '@angular/core'
import Swal from 'sweetalert2'


@Component({
  selector: 'app-listenf',
  templateUrl: './listenf.component.html',
  styleUrls: ['./listenf.component.css']
})

export class ListenfComponent implements OnInit {
  
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
 listeofanneescolaire:any=[]
 an:any
 tabenf:any=[]
  public displayedColumns = ['prenom','nom','classe','datenessance','etatmedical','Nompere','Nommere','adresse','telpere','telmere','dateinscrit','details', 'update','supprimer']
 public dataSource = new MatTableDataSource<enfant>();
 public dataSource1 = new MatTableDataSource<enfant>();

        constructor(private route:Router,private enfService:DirecteurService) {  }
      
        ngOnInit(): void {
       this.data = [];
       this.getall();
       this.dataSource=new MatTableDataSource<enfant>(this.enfs)
       this.dataSource1=new MatTableDataSource<enfant>(this.tabenf)
      this.dataSource.sort=  this.sort

    }
    
     
        getall(){
          this.enfService.anneescolaire().subscribe(res => {
            this.listeofanneescolaire=res
                console.log(this.listeofanneescolaire[this.listeofanneescolaire.length-1])  
                this.an=this.listeofanneescolaire[this.listeofanneescolaire.length-1]["an"]

                this.enfService.getallenfs().subscribe(res => {
                  this.tabenf=res
                  console.log(this.tabenf)
                  console.log(this.enfs)

                  this.tabenf.forEach(element => {
                    let x =new Date(Date.parse(element.dateinscrit)).getTime();

                    let y =new Date(Date.parse(this.listeofanneescolaire[this.listeofanneescolaire.length-1]["date_deb"])).getTime();
                    let z =new Date(Date.parse(this.listeofanneescolaire[this.listeofanneescolaire.length-1]["date_fin"])).getTime();
                    

                    if(x>y  && x<z) {
                    this.enfs.push(element)
                    }
                  });
                  console.log(this.enfs)
                for (let index = 0; index < this.enfs.length; index++) {
                  const element = this.enfs[index];
                
                  this.enfService.classebyid(element["classe_id"]).subscribe(res => {
                   this.classe=res
                   this.t=false
                   this.c=""
                   element["a"]=true
     
                   if (this.classe["niveau_id"]==1) {
                    this.c="ثلاث سنوات "+ this.classe["nom"]
                   } else
                   if (this.classe["niveau_id"]==2) {
                     this.c="أربعة  سنوات "+ this.classe["nom"]
                    } else
                    if (this.classe["niveau_id"]==3) {
                     this.c="خمسة سنوات  "+ this.classe["nom"]
                    } 
                    console.log(this.c)
                    element["classe_id"]=this.c
                  }, err => {
                    this.c="ليس له قسم"
                    element["a"]=false
                    element.classe_id=this.c
     
                 }
                  );
     
     
     
                }
                this.dataSource=new MatTableDataSource<enfant>(this.enfs)
                this.dataSource1=new MatTableDataSource<enfant>(this.tabenf)
                this.dataSource.paginator = this.paginator;


     console.log(this.enfs)
                 }, err => alert(" afficg enf echek"+ err)
                 );
        })
 
        }

        toajtenf(){
          this.route.navigate(["ajouterenfant"])
        }
      
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
                console.log(enfsp)
                if(enfsp.length>1){
                  this.enfService.supp(dataItem.id).subscribe(res => {
                    window.location.reload()
                  })
                  
                }
                else if(enfsp.length==1){
                  this.enfService.deleteuser(dataItem.userparent).subscribe(res => {
                    window.location.reload()
                  })
                }
              })
            })
            } else if (result.dismiss === Swal.DismissReason.cancel) {
          
            }
          })
                }
       
   
        

         afftoclasse(dataItem){
          this.route.navigate(["affecterclasse",dataItem.id])

         }
         pay(dataItem){
          this.route.navigate(["paymentenf",dataItem.id])

         }
         public doFilter = (value: string) => {
       //   this.dataSource.filter = value.trim().toLocaleLowerCase();
       value = value.trim().toLocaleLowerCase();
       this.dataSource.filter=value
        }
        public doFilter2 = (value: string) => {
          //   this.dataSource.filter = value.trim().toLocaleLowerCase();
          value = value.trim().toLocaleLowerCase();
          this.dataSource1.filter=value
           }
      }
