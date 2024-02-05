import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-modifierdocument',
  templateUrl: './modifierdocument.component.html',
  styleUrls: ['./modifierdocument.component.css']
})
export class ModifierdocumentComponent implements OnInit {
  constructor(private route:ActivatedRoute,private enfService:DirecteurService, private router:Router) {  }

  ngOnInit() {
    this.getcharge()
  }
  charge:any={
    nom:"",
    montant:0
    
  }
  getcharge()
  {
    let id=this.route.snapshot.paramMap.get("id")
    this.enfService.documentsbyid(id).subscribe(res=>{
        this.charge=res
        console.log(this.charge)
    })

  }
  pycejointe:File
nom:string
montant:any
date:any
envoiFichier (fichiers: FileList) {
  this.charge.pycejointe = fichiers.item(0);
}
onNomChanged(event: any) {
  this.charge.nom = event.target.value;
}


envoiFichierParLeService() {
    let id=this.route.snapshot.paramMap.get("id")
    const uploadData = new FormData();
    if(typeof(this.charge.pycejointe)=="string"){
      uploadData.append('nom', this.charge.nom);
  
      console.log("hhh  "+uploadData)  
      this.enfService.mdfdocumentbyid(id,uploadData).subscribe(
        data =>{
          console.log(data)
          this.router.navigate(["maitresse/listdocument"])
        },
        error => console.log(error)
      );
    }
    else {

  
    uploadData.append('pycejointe', this.charge.pycejointe);
    uploadData.append('nom', this.charge.nom);

    console.log("hhh  "+uploadData)  
    this.enfService.mdfdocumentbyid(id,uploadData).subscribe(
      data =>{
        console.log(data)
        this.router.navigate(["maitresse/listdocument"])
      },
      error => console.log(error)
    );
  }
  }



}

