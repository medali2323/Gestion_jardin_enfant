import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-printens',
  templateUrl: './printens.component.html',
  styleUrls: ['./printens.component.css']
})
export class PrintensComponent implements OnInit {
  timer:any
  enf:any
  constructor(private route:ActivatedRoute,private enfService:DirecteurService) {  }

  ngOnInit() {
    let id=this.route.snapshot.paramMap.get("id")
    
    this.detailens(id)
    this.timer=setInterval(()=>{
      this.print()
      },1000)
  }
  detailens(id){
     this.enfService.getmbyid(id).subscribe(res => {
      console.log(res);
       this.enf=res
      }, err => alert(" afficg enf echek"+ err)
      );
}
print(){
  clearInterval(this.timer);
  window.print()
window.close()
}
}