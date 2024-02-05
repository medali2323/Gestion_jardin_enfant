import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-ajoutmaitrsse',
  templateUrl: './ajoutmaitrsse.component.html',
  styleUrls: ['./ajoutmaitrsse.component.css']
})
export class AjoutmaitrsseComponent implements OnInit {
  classe:any
  mait:any=[]
  m:any
  mText:any
  m1:any=[]
  cs:any=[]
  m2:any=[]
  maitress:any=[]
    constructor(  private enfantservice:DirecteurService,private route:ActivatedRoute,private router:Router) { }
  
    ngOnInit() {
      this.lm()
      let id=this.route.snapshot.paramMap.get("id")
      this.enfantservice.clubbyid(id).subscribe(res=>{
        this.classe=res
      })
    }
    lm(){
      let cls:any=[]
      this.enfantservice.getm().subscribe(r=>{
        console.log(r)
        this.mait=r
        let i=0
        this.mait.forEach(element => {
         if (element["actif"]==true) {
             this.m1[i]=element
               i++
                                      }
                        });
                        console.log(this.m1)
                        this.m2=[]

         this.enfantservice.classe() .subscribe(res=>{
            cls=res
            cls.forEach(element => {
              this.m2.push(element.maitresse)
            });
     
        this.enfantservice.clubs().subscribe(res=>{
            this.cs=res
            console.log(this.cs)
            let x=[]
            this.cs.forEach(elt => {
               this.m2.push(elt.maitresse)    
  
            });
            this.m1.forEach(element => {
              if(this.m2.indexOf(element.id) == -1 )
  
              {
                this.maitress.push(element)
  
              }
            });
            console.log(this.m2)
            console.log(this.maitress)
  
        })
      })
      });
      let id=this.route.snapshot.paramMap.get("id")
  let m:any
      this.enfantservice.clubbyid(id).subscribe(r=>{
        this.mText=r["maitresse"]
        console.log(this.mText)
        this.enfantservice.getmbyid(this.mText).subscribe(res=>{
          m=res
          this.maitress.push(m)
          console.log(this.maitress)

        })
      });

    }

    affecter(){
      let id=this.route.snapshot.paramMap.get("id")
      this.enfantservice.clubbyid(id).subscribe(res=>{
        this.classe=res
        this.classe["maitresse"]=this.mText
        this.enfantservice.mdfclub(id,this.classe).subscribe(r=>{
          this.router.navigate(["listcub"]) 
        });
      });
    
      
  
  
    
    }
  }
  