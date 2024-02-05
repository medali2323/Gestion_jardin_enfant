import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  form: FormGroup;
  nom:any
  cover:any
  constructor(private route:Router,private enfService:DirecteurService,private formBuilder: FormBuilder) { }

  ngOnInit() {
 
    
  }

  onNomChanged(event: any) {
    this.nom = event.target.value;
  }

  onImageChanged(event: any) {
    this.cover = event.target.files[0];
  }
  ajoutercharge() {
    const uploadData = new FormData();
    uploadData.append('pycejointe', this.cover);
    uploadData.append('nom', this.nom);

    this.enfService.ajtdocument(uploadData).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }



































}