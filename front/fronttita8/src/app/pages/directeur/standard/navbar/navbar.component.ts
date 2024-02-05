import { Component, OnInit, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { DirecteurService } from 'src/app/service/directeur.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private route:Router,private dir:DirecteurService) { }

  tab:any=[]
  an:any
    ngOnInit() {
      this.dir.anneescolaire().subscribe(res => {
        console.log(res);
        
        this.tab=res
        if(this.tab.length>0){
          console.log(this.tab[this.tab.length-1])  
          this.an=this.tab[this.tab.length-1]["code"]
        }
           
    })
  }
  logout(){
         
    localStorage.removeItem('token');
    localStorage.removeItem('isadmin');
    localStorage.removeItem('isloggedIn');
    localStorage.removeItem('username');
    localStorage.removeItem('x');
    localStorage.removeItem('y');


    this.route.navigate(['login'])
}
termlineranneescolaire(){

  Swal.fire({
    title: 'هل انت متأكد من انهاء السنة الدراسية ',
    text: '',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'تعم!',
    cancelButtonText: 'لا'
  }).then((result) => {
    if (result.isConfirmed) {
      this.route.navigate(['ajoutanneescolaire'])

    
    } else if (result.dismiss === Swal.DismissReason.cancel) {
  
    }
  })
  /*
  if(confirm("هل انت متأكد من انهاء السنة الدراسية"))
  {
    this.route.navigate(['ajoutanneescolaire'])

  }*/
  

}
mdfannee(){
  let id =this.tab[this.tab.length-1]["id"]
  this.route.navigate(["modifieranneescolaire",id])
}

}
