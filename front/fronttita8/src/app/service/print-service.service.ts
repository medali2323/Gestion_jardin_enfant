import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PrintService {
isprint=false;
  constructor(private route:Router) { }
  printDocument(documentName:string,documentData:string[])
  {
    this.isprint=true
    this.route.navigate(["/home"
    ,{
      outlets:{
        'print':['print',documentName,documentData.join()]
      }
    }
  ]);
  }
  ondataready(){
    setTimeout(()=>{
      window.print();
      this.isprint=false;
      this.route.navigate([{outlets:{print:null}}]);
    });
  }
}
