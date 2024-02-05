import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';
import { parents } from './parents';

@Component({
  selector: 'app-compteparents',
  templateUrl: './compteparents.component.html',
  styleUrls: ['./compteparents.component.css']
})
export class CompteparentsComponent implements OnInit {
  @ViewChild (MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private route:Router,private enfService:DirecteurService) { }

  ngOnInit() {
    this.listactivite()
  }
  public displayedColumns = ['nomenf','username2','email2','password2', 'actif','update']

  public dataSource = new MatTableDataSource<parents>();
  las:any=[]
  parents:any=[]
listactivite(){

  let l:any=[]
  this.enfService.gettalluser().subscribe(res=>{
      l=res
      console.log(res)
      l.forEach(element => {
        if(element.is_parent)
          this.parents.push(element)
       
      });
console.log(this.parents)
      this.enfService.getallenfs().subscribe(res=>{
        let enfs:any=res
        enfs.forEach(elt => {
          this.parents.forEach(element => {
            if(elt.userparent==element.id){
              element.nom=elt.nom
              element.prenom=elt.prenom
              element.nomenf= element.prenom + " "  + element.nom 
              if(element.is_active==true)
                  element.actif="مفعل"
                  if(element.is_active==false)
                  element.actif="غير مفعل"
              let u2:any=[]
              this.enfService.gettinfuser().subscribe(res=>{
                u2=res
                u2.forEach(elt2 => {
                  /*
                  if(elt2.username==element.username){
                    element.password2=elt2.password
                   element.username2=elt2.username[0]  + "******" + elt2.username[7] 
                    element.email2=elt2.username[0]  + "******" + elt2.username[7] +"@tita.tn"
                    element.password2=element.password2[0]  + "******" + element.password2[7] 

                  }
                  */
                  if(elt2.username==element.username){
                    element.password2=elt2.password
                   element.username2=elt2.username
                    element.email2=elt2.username +"@tita.tn"

                  }
                });
              })
            }
          });
        });
      })
      console.log(this.parents)

      this.dataSource= new MatTableDataSource<parents>(this.parents);
      this.dataSource.paginator = this.paginator;

     
  })
}
modifieractuvite(dataItem){
  this.route.navigate(["modifiercomtes",dataItem.id])

}

public doFilter = (value: string) => {
  //   this.dataSource.filter = value.trim().toLocaleLowerCase();
  value = value.trim().toLocaleLowerCase();
  this.dataSource.filter=value
   }

}
