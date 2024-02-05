import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';

@Component({
  selector: 'app-payementenf',
  templateUrl: './payementenf.component.html',
  styleUrls: ['./payementenf.component.css']
})
export class PayementenfComponent implements OnInit {
  showpc:boolean=false
  showpa:boolean=false
    constructor(private enfService: DirecteurService, private router: Router, private route: ActivatedRoute) { }
    e: any
    tab: any = []
    tabb: any = []
  
  t:any=[]
  c=false
    mois = ["الترسيم", "شهر سبتمبر", "شهر أكتوبر", "شهر نوفمبر", "شهر ديسمبر", "شهر جانفي", "شهر فيفري", "شهر مارس", "شهر أفريل", "شهر ماي", "شهر جوان"]
    mois1 = ["", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر", "جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان"]
  mois2=[0,9,10,11,12,1,2,3,4,5,6]
    ngOnInit() {
     this.verif()
      // this.payer()
      this.listactivite()
  
     // this.azer()
  
      this.reglementenf()
  
    }
    lcee:any=[]
  roma:any=[]
  verif(){
    let enfs:any=[]
    let enfsp:any=[]
  let n=localStorage.getItem("id")
  this.enfService.getallenfs().subscribe(res=>{
  enfs=res
  console.log(enfs)
  
  enfs.forEach(element => {
  if(element.userparent ==n){
    enfsp.push(element.id)
  }
  });
  let id=this.route.snapshot.paramMap.get("id")
  
  console.log(enfsp)
  let myUser = enfsp.filter(u =>u==id)
  
  if(myUser.length==0){
    this.router.navigate(["parent/listenfant"])
  }
  })
  }
    azer(){
      let id = this.route.snapshot.paramMap.get("id")
  
      let lc:any=[]
      let lce:any=[]
      
         this.enfService.clubs().subscribe(res1=>{
           lc=res1
          //  this.enfService.clubsenf().subscribe(res1=>{
            this.enfService.getclubbyenf(id).subscribe(res=>{
              lce=res
                                   console.log(lce)
  let aux:any={
        ch:""
      }
    
              this.mois2.forEach( e => { 
               
                
              
                 
                    this.lcee.push(e) 
                   if(e!=0){
                    lce.forEach(element => {
                      let data:any
                       data={...element}
                       //data=element
                        data.moisClub=e
                     //console.log(data)
                      this.lcee.push(data)
        
                    });
                   }
                  
          
                
              });
              console.log(this.lcee)
              let   ac:any
              //for (let index = 0; index < this.lcee.length; index++) {
              //  const element = this.lcee[index];
                this.lcee.forEach(element => {
                  if(typeof(element)=="number"){
                 
                    // let ch="معلوم شهر " + element
                    let aux:any={
                      ch:""
                    }
                       aux.ch=element
                       aux.club=null
                       let m:string
                       switch (element ) {
                        case 0:
                          m="الترسيم"
                          break;
                        case 9:
                          m="شهر سبتمبر"
                          break;
                          case 10:
                           m="شهر أكتوبر"
                           break; 
                           case 11:
                           m="شهر نوفمبر"
                           break; case 12:
                           m="شهر ديسمبر"
                           break; case 1:
                           m="شهر جانفي"
                           break; case 2:
                           m="شهر فيفري"
                           break; case 3:
                           m="شهر مارس"
                           break; case 4:
                           m="شهر أفريل"
                           break; case 5:
                           m="شهر ماي"
                           break; case 6:
                           m="شهر جوان"
                           break;
                      
                        default:
                          break;
                      }
                       aux.m=m
                       this.roma.push(aux)
                   
                  
                 }
                 else if(typeof(element)=="object"){
                   lc.forEach(ec => {
                     if(ec.id==element.club ){
                   //    let ch="معلوم نادي  " +"ال"  +ec.nom  +" " + element.moisClub
                       let aux:any={
                         ch:""
                       }
                            aux.ch= element.moisClub  
                            let m:string
                            switch (element.moisClub ) {
                              case 9:
                                m="شهر سبتمبر"
                                break;
                                case 10:
                                 m="شهر أكتوبر"
                                 break; 
                                 case 11:
                                 m="شهر نوفمبر"
                                 break; case 12:
                                 m="شهر ديسمبر"
                                 break; case 1:
                                 m="شهر جانفي"
                                 break; case 2:
                                 m="شهر فيفري"
                                 break; case 3:
                                 m="شهر مارس"
                                 break; case 4:
                                 m="شهر أفريل"
                                 break; case 5:
                                 m="شهر ماي"
                                 break; case 6:
                                 m="شهر جوان"
                                 break;
                            
                              default:
                                break;
                            }
                       aux.club=element.club
                       aux.m= "نادي "+ec.nom  +" " + m 
                       //  console.log(aux)
                       this.roma.push(aux)
                     }
                   });
           
                 }
                });  
          console.log(this.roma)
            })
           
  
     
  })
   // })
     
    }
    pay(item){
      console.log(item)
      let id = this.route.snapshot.paramMap.get("id")
      if(item.mois.club==null)
      this.router.navigate(["ajoutreglementenf",id,"null",item.mois.ch])
      else
      this.router.navigate(["ajoutreglementenf",id,item.mois.club,item.mois.ch])
  
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
  
      let lc:any=[]
      let lce:any=[]
      
         this.enfService.clubs().subscribe(res1=>{
           lc=res1
          //  this.enfService.clubsenf().subscribe(res1=>{
            this.enfService.getclubbyenf(id).subscribe(res=>{
              lce=res
                                   console.log(lce)
  let aux:any={
        ch:""
      }
    
              this.mois2.forEach( e => { 
               
                
              
                 
                    this.lcee.push(e) 
                   if(e!=0){
                    lce.forEach(element => {
                      let data:any
                       data={...element}
                       //data=element
                        data.moisClub=e
                     //console.log(data)
                      this.lcee.push(data)
        
                    });
                   }
                  
          
                
              });
              console.log(this.lcee)
              let   ac:any
              //for (let index = 0; index < this.lcee.length; index++) {
              //  const element = this.lcee[index];
                this.lcee.forEach(element => {
                  if(typeof(element)=="number"){
                 
                    // let ch="معلوم شهر " + element
                    let aux:any={
                      ch:""
                    }
                       aux.ch=element
                       aux.club=null
                       let m:string
                       switch (element ) {
                        case 0:
                          m="الترسيم"
                          break;
                        case 9:
                          m="شهر سبتمبر"
                          break;
                          case 10:
                           m="شهر أكتوبر"
                           break; 
                           case 11:
                           m="شهر نوفمبر"
                           break; case 12:
                           m="شهر ديسمبر"
                           break; case 1:
                           m="شهر جانفي"
                           break; case 2:
                           m="شهر فيفري"
                           break; case 3:
                           m="شهر مارس"
                           break; case 4:
                           m="شهر أفريل"
                           break; case 5:
                           m="شهر ماي"
                           break; case 6:
                           m="شهر جوان"
                           break;
                      
                        default:
                          break;
                      }
                       aux.m=m
                       this.roma.push(aux)
                   
                  
                 }
                 else if(typeof(element)=="object"){
                   lc.forEach(ec => {
                     if(ec.id==element.club ){
                   //    let ch="معلوم نادي  " +"ال"  +ec.nom  +" " + element.moisClub
                       let aux:any={
                         ch:""
                       }
                            aux.ch= element.moisClub  
                            let m:string
                            switch (element.moisClub ) {
                              case 9:
                                m="شهر سبتمبر"
                                break;
                                case 10:
                                 m="شهر أكتوبر"
                                 break; 
                                 case 11:
                                 m="شهر نوفمبر"
                                 break; case 12:
                                 m="شهر ديسمبر"
                                 break; case 1:
                                 m="شهر جانفي"
                                 break; case 2:
                                 m="شهر فيفري"
                                 break; case 3:
                                 m="شهر مارس"
                                 break; case 4:
                                 m="شهر أفريل"
                                 break; case 5:
                                 m="شهر ماي"
                                 break; case 6:
                                 m="شهر جوان"
                                 break;
                            
                              default:
                                break;
                            }
                       aux.club=element.club
                       aux.m= "نادي "+ec.nom  +" " + m 
                       //  console.log(aux)
                       this.roma.push(aux)
                     }
                   });
           
                 }
                });  
          console.log(this.roma)
            })
           
  
     

      this.enfService.anneescolaire().subscribe(res => {
        this.ans=res
            console.log(this.ans[this.ans.length-1])  
            this.annnee=this.ans[this.ans.length-1]
            this.enfService.reglementbyenf(id).subscribe((res:any) => {
              let rgsenf: any = [] //les reglement l kol mtaa enfant
              res.forEach(element => {
                let x =new Date(Date.parse(element.datereglemaiment)).getTime();
  
                let y =new Date(Date.parse(this.ans[this.ans.length-1]["date_deb"])).getTime();
                let z =new Date(Date.parse(this.ans[this.ans.length-1]["date_fin"])).getTime();
                if ( x>y  && x<z) {
                  rgsenf.push(element)
                }
              });
              console.log(rgsenf)
              if(rgsenf==0){
        
                this.roma.forEach(element => {
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
                console.log(this.tab)
  
              }
              else{
                this.roma.forEach(element => {
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
                      let x=elt.moisreglemaiment
                      let y:any=x.split(" ")
                      let cm=Number(y[1])
                      let cc=Number(y[0])
                      if(y[0]=="null"){
                        payer = cm==element.ch && element.club==null
                        if(payer){
                          d =  {
                            mois:element,
                            datereglemaiment : elt.datereglemaiment,
                         //   payer : elt.moisreglemaiment == element.m,
                         payer :  cm==element.ch && element.club==null,
                            montantreglemaiment : elt.montantreglemaiment,
                            idreg:elt.id
                          }
                     
                        }
                       
                      }
                      else{
                        payer = cc == element.club && cm==element.ch
                        if(payer){
                          d =  {
                            mois:element,
                            datereglemaiment : elt.datereglemaiment,
                         //   payer : elt.moisreglemaiment == element.m,
                         payer : cc == element.club && cm==element.ch,
                            montantreglemaiment : elt.montantreglemaiment,
                            idreg:elt.id
                          }
                     
                        }
                       
                      }
                      //payer = elt.moisreglemaiment == element.m
                   
                    }
                  });
                  this.tab.push(d)
                 
                });
              }
              console.log(this.tab)
  
        
            })
      })
    })
   
    }
    mdfreg(d){
  this.router.navigate(['mdfreglementenf',d.idreg])
    }
    las:any=[]
  listactivite(){
    let t:any=[]
    let t1:any=[]
    let id = this.route.snapshot.paramMap.get("id")
  
    this.enfService.activite().subscribe(res => {
      t1=res
      console.log(t1)
  
               
      this.enfService.anneescolaire().subscribe(res => {
        this.ans=res
        t1.forEach(element => {
          let a =new Date(Date.parse(element.dateactivite)).getTime();
    
          let b =new Date(Date.parse(this.ans[this.ans.length-1]["date_deb"])).getTime();
          let c =new Date(Date.parse(this.ans[this.ans.length-1]["date_fin"])).getTime();
          if(a>b  && a<c){
            t.push(element)
          }
        });
        console.log(t)
            console.log(this.ans[this.ans.length-1])  
            this.annnee=this.ans[this.ans.length-1]
            this.enfService.reglementbyenf(id).subscribe((res:any) => {
              let rgsenf: any = [] //les reglement l kol mtaa enfant
              res.forEach(element => {
                let x =new Date(Date.parse(element.datereglemaiment)).getTime();
  
                let y =new Date(Date.parse(this.ans[this.ans.length-1]["date_deb"])).getTime();
                let z =new Date(Date.parse(this.ans[this.ans.length-1]["date_fin"])).getTime();
                if (  x>y  && x<z) {
                  rgsenf.push(element)
                }
              });
              console.log(rgsenf)
              console.log(t)
  
              if(rgsenf.length==0){
        
                t.forEach(element => {
                  let payer = false;
                    let d:any;
                     
                      if(!payer){
                        d = {
                          id:element.id,
                          mois:element.nom,
                          datereglemaiment : '',
                          payer :false,
                          montantreglemaiment :'',
                        };
                      
                      }
                    
                    this.tabb.push(d)
                   
                  
                
                 
                });
                console.log(this.tabb)
  
              }
              else{
                t.forEach(element => {
                  let payer = false;
                  let d:any;
                  rgsenf.forEach(elt => {
                   
                    if(!payer){
                      d = {
                        id:element.id,
  
                        mois:element.nom,
                        datereglemaiment : '',
                        payer :false,
                        montantreglemaiment :'',
                      };
                      let x=elt.moisreglemaiment
                      let y=x.split("&")
                      let n=Number(y[1])
                      payer = n == element.id
                      if(payer){
                        d =  {
                          mois:element.nom,
                          datereglemaiment : elt.datereglemaiment,
                          payer :  n == element.id,
                          montantreglemaiment : elt.montantreglemaiment,
                          idreg:elt.id
                        }
                      }
                    }
                  });
                  this.tabb.push(d)
                 
                });
              }
            
        
        
              console.log(this.tabb)
  
            })
      })
    })
  }
  payact(item){
    let id = this.route.snapshot.paramMap.get("id")
  console.log(item)
  this.router.navigate(['ajoutreglementenfac',id,item.id])
  }
  impp(d){
  window.open("printreglementens/"+d.idreg)
  
       }

}
