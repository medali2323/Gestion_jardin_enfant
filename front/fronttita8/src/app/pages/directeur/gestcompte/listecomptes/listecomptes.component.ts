import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-listecomptes',
  templateUrl: './listecomptes.component.html',
  styleUrls: ['./listecomptes.component.css']
})
export class ListecomptesComponent implements OnInit {
  showAllparent:boolean=false
  showAllTeachers:boolean=false
parents:any=[]
maitresses:any=[]
  constructor(private route: Router, private enfService: DirecteurService) { }

  ngOnInit() {
    this.getcompte()
  }

getcompte(){
  let l:any=[]
  this.enfService.gettalluser().subscribe(res=>{
      l=res
      console.log(res)
      l.forEach(element => {
        if(element.is_parent)
          this.parents.push(element)
          if(element.is_ens)
          this.maitresses.push(element)
      });
      this.maitresses.forEach(element => {
        
      });
      this.enfService.getallenfs().subscribe(res=>{
        let enfs:any=res
        enfs.forEach(elt => {
          this.parents.forEach(element => {
            if(elt.userparent==element.id){
              element.nom=elt.nom
              element.prenom=elt.prenom
              let u2:any=[]
              this.enfService.gettinfuser().subscribe(res=>{
                u2=res
                u2.forEach(elt2 => {
                  if(elt2.username==element.username){
                    element.password2=elt2.password
                   // element.username2=elt2.username[0]  + "******" + elt2.username[7] 
                   // element.email2=elt2.username[0]  + "******" + elt2.username[7] +"@tita.tn"
                  }
                });
              })
            }
          });
        });
      })
      console.log(this.parents)

      console.log(this.maitresses)

      this.enfService.getm().subscribe(res=>{
        let ms:any=res
        ms.forEach(elt => {
          this.maitresses.forEach(element => {
            if(elt.user==element.id){
              console.log(elt)
              element.nom=elt.nom
              element.prenom=elt.prenom
              
              let u2:any=[]
              this.enfService.gettinfuser().subscribe(res=>{
                u2=res
                u2.forEach(elt2 => {
                  if(elt2.username==element.username){
                    element.password2=elt2.password
                   // element.username2=elt2.username[0]  + "******" + elt2.username[7] 
                 //   element.email2=elt2.username[0]  + "******" + elt2.username[7] +"@tita.tn"

                  }
                });
              })
            }
          });
    
          console.log(this.maitresses)
          this.maitresses.forEach(element => {
            
          });
        });
      })
  })
}
detailcompte(dataitem){
  this.route.navigate(["modifiercomtes",dataitem.id])
}
}
