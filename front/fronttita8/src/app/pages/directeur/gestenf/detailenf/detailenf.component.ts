import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';
//pdf make 
@Component({
  selector: 'app-detailenf',
  templateUrl: './detailenf.component.html',
  styleUrls: ['./detailenf.component.css']
})
export class DetailenfComponent implements OnInit {
   l3:any=[]
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
  c:any={}
  classe:any
  constructor(private route:ActivatedRoute,private enfService:DirecteurService, private router:Router) {  }

  ngOnInit() {
    let id=this.route.snapshot.paramMap.get("id")
    
    this.detailenfant(id)
    this.clubforenf()
    this.classeENF()
  }
  detailenfant(id){
     this.enfService.getbyid(id).subscribe(res => {
      console.log(res);
       this.enf=res

      }, err => alert(" afficg enf echek"+ err)
      );
}
classeENF(){
  let id=this.route.snapshot.paramMap.get("id")

  this.enfService.getbyid(id).subscribe(res => {
     this.enf=res
     this.enfService.classebyid(this.enf["classe_id"]).subscribe(res => {
      this.classe=res
      this.c=""
      if (res["niveau_id"]==1) {
       this.c="ثلاث سنوات "+ res["nom"]
      } else
      if (res["niveau_id"]==2) {
        this.c="أربعة  سنوات "+ res["nom"]
       } else
       if (res["niveau_id"]==3) {
        this.c="خمسة سنوات  "+ res["nom"]
       } 
       console.log(this.c)
     }, err => this.c="ليس له قسم"

     );
    }  );

}
clubforenf(){
  let l:any=[]
  let l1:any=[] // l1 fih les id mtaa les club l mcherek fih l enfant
  let l2:any=[]// l2 fih les clubs l kil
  let id=this.route.snapshot.paramMap.get("id")

  this.enfService.clubsenf().subscribe(res => {
    l=res
    l.forEach(element => {
      if (element.enfant==id) {
        l1.push(element)
      }
    });
    this.enfService.clubs().subscribe(res => {
        l2=res
        l1.forEach(elt => {
          l2.forEach(e => {
            if (e.id==elt.club) {
              this.l3.push(e)
            }
          });
        });
            console.log(this.l3)
    })

})
}
mdfclub(){
  let id=this.route.snapshot.paramMap.get("id")

  this.router.navigate(['affectertoclub',id])

}
mdfclasse(){
  let id=this.route.snapshot.paramMap.get("id")

  this.router.navigate(['affecterclasse',id])
}
convert(ch):string
{
  let ch1=""
  let tab=ch.split(" ")
  let  tab1=tab.reverse()
  tab1.forEach(element => {
    ch1=ch1+element + " "
  });
  return ch1
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
window.open("print/"+id)
 //this.router.navigate(["print",id])
 }
}
