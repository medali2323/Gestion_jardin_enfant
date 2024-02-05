import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-detailens',
  templateUrl: './detailens.component.html',
  styleUrls: ['./detailens.component.css']
})
export class DetailensComponent implements OnInit {
  enf:any
  constructor(private route:ActivatedRoute,private enfService:DirecteurService) {  }

  ngOnInit() {
    let id=this.route.snapshot.paramMap.get("id")
    console
    this.detailens(id)
  }
  detailens(id){
     this.enfService.getmbyid(id).subscribe(res => {
      console.log(res);
       this.enf=res
      }, err => alert(" afficg enf echek"+ err)
      );
}
generatePdf(){
  /*
  let id=this.route.snapshot.paramMap.get("id")

  this.enfService.getbyid(id).subscribe(res => {
    console.log(res);
     this.enf=res
     let ch1=""
     let ch= this.enf["adresse"]
    let tab=ch.split(" ")
    let  tab1=tab.reverse()
    tab1.forEach(element => {
      ch1=ch1+element + " "
    });
     pdfMake.fonts = {
      DroidKufi: {
          normal: 'DroidKufi-Regular.ttf',
          bold: 'DroidKufi-Regular.ttf',
          italics: 'DroidKufi-Regular.ttf',
          bolditalics: 'DroidKufi-Regular.ttf'
      }
  }
  console.log(this.enf)
    const documentDefinition = { 
      content: [
        ' الشخصية  البطاقة   ',
        this.enf["nom"] + " " +this.enf["prenom"] +'    اللقب و الإسم   ',
        'الولادة تاريخ ' + this.enf.datenessance,
     this.enf["Nompere"] +'     الأب إسم     ',
     this.enf["profissionpere"] +'     الأب مهنة     ',
     this.enf["telpere"] +'     الأب هاتف     ',

     this.enf["Nommere"] +'     الأم إسم     ',
     this.enf["proffisionmere"] +'     الأم مهنة     ',
     this.enf["telmere"] +'     الأم هاتف     ',
this.convert(this.enf["adresse"]) +'      العنوان     ',

      ] 
                  
    };
    pdfMake.createPdf(documentDefinition).open();
    }, err => alert(" afficg enf echek"+ err)
    );
  */
 //window.print()
 let id=this.route.snapshot.paramMap.get("id")
window.open("printens/"+id)
 //this.router.navigate(["print",id])
 }

}
