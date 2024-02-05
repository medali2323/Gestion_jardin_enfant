import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-paymentmairaisse',
  templateUrl: './paymentmairaisse.component.html',
  styleUrls: ['./paymentmairaisse.component.css']
})
export class PaymentmairaisseComponent implements OnInit {

 
  constructor(private enfService: DirecteurService, private router: Router, private route: ActivatedRoute) { }
  e: any
  tab: any = []
t:any=[]
  mois = [ "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر", "جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان"]
  ngOnInit() {
    this.payer()
    this.reglementenf()
  }
  pay(item){
    let id = this.route.snapshot.paramMap.get("id")

    this.router.navigate(["ajoutreglementenf",id,item.mois])
  }
  payer() {
    let id = this.route.snapshot.paramMap.get("id")
    this.enfService.getbyid(id).subscribe(res => {
      let enf: any
      enf = res
      console.log(enf)
      this.enfService.fraisbyid(enf.regimehoraire).subscribe(res => {
        let frais: any
        frais = res
        //     console.log(frais)
      })
      this.enfService.classebyid(enf.classe).subscribe(res => {
        let classe: any
        classe = res
        let nv = classe.niveau
        //    console.log(nv)
        this.enfService.frais().subscribe(res => {
          let frs: any = []
          frs = res
          for (let index = 5; index < frs.length; index++) {

            const element = frs[index];
            let ch = element["typefrais"]
            let l = ch.length
            let ch1 = ch[l - 1]
            let x = Number(ch1) - 2
            // console.log(x)
            if (x == nv) {
              this.e = element
              //  console.log(this.e)

            }

          }
        })
      })

    })
  }
  ans:any=[
  ]
  annnee:any
  reglementenf() {
    let id = this.route.snapshot.paramMap.get("id")
    this.enfService.anneescolaire().subscribe(res => {
      this.ans=res
          console.log(this.ans[this.ans.length-1])  
          this.annnee=this.ans[this.ans.length-1]
          this.enfService.reglement().subscribe((res:any) => {
            let rgsenf: any = [] //les reglement l kol mtaa enfant
            res.forEach(element => {
              let x =new Date(Date.parse(element.datereglemaiment)).getTime();

              let y =new Date(Date.parse(this.ans[this.ans.length-1]["date_deb"])).getTime();
              let z =new Date(Date.parse(this.ans[this.ans.length-1]["date_fin"])).getTime();
              if (element.enfant == id  && x>y  && x<z) {
                rgsenf.push(element)
              }
            });
            console.log(rgsenf)
            if(rgsenf==0){
      
              this.mois.forEach(element => {
                let payer = false;
                  let d:any;
                   
                    if(!payer){
                      d = {
                        mois:element,
                        datereglemaiment : '',
                        payer :false,
                        montantreglemaiment :'',
                      };
                    
                    }
                  
                  this.tab.push(d)
                 
                
              
               
              });
            }
            else{
              this.mois.forEach(element => {
                let payer = false;
                let d:any;
                rgsenf.forEach(elt => {
                 
                  if(!payer){
                    d = {
                      mois:element,
                      datereglemaiment : '',
                      payer :false,
                      montantreglemaiment :'',
                    };
                    payer = elt.moisreglemaiment == element
                    if(payer){
                      d =  {
                        mois:element,
                        datereglemaiment : elt.datereglemaiment,
                        payer : elt.moisreglemaiment == element,
                        montantreglemaiment : elt.montantreglemaiment,
                      }
                    }
                  }
                });
                this.tab.push(d)
               
              });
            }
          
            console.log(this.tab)
      
      
          })
    })
 
  }
  
}

