import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-printabsancemaitresse',
  templateUrl: './printabsancemaitresse.component.html',
  styleUrls: ['./printabsancemaitresse.component.css']
})
export class PrintabsancemaitresseComponent implements OnInit {
  enfs:any=[]
  absenfs:any=[]
  timer:any
   dat = this.route.snapshot.paramMap.get("idc")
  ens:any=[]
    constructor(private route: ActivatedRoute, private enfService: DirecteurService, private router: Router, ) {}
  
    ngOnInit() {
      this.getabsanceens()
    
    }
  
    getabsanceens(){
    let absens:any=[]
    let l:any=[]
    let id = this.route.snapshot.paramMap.get("id")
    let databs = this.route.snapshot.paramMap.get("idc")
  
    this.enfService.getm().subscribe(res => {
      let ens:any = []
      ens=res
      this.enfService.getabsmait().subscribe(res => {
  
        absens = res
      
        absens.forEach(element => {
          if (element.dateabcence == databs) {
            l.push(element)
          }
        });
   
    let tab:any=[]
    this.enfService.getm().subscribe(res=>{
  tab=res
  l.forEach(elt => {
  
  tab.forEach(element => {
      if(element.id==elt.maitresse){
        this.ens.push(element)
      }
    });
  });
  if( this.ens.length==0){
    this.router.navigate(["absancemaitresse"])

  }else{
    this.timer=setInterval(()=>{
      this.print()
      },1000) 
  }
    })
  
      })
    })
  
  
  
  
  
  
    
  }

  print(){
    clearInterval(this.timer);
    window.print()
   window.close()
  }
  }
  