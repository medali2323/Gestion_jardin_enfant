import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbarp',
  templateUrl: './navbarp.component.html',
  styleUrls: ['./navbarp.component.css']
})
export class NavbarpComponent implements OnInit {

  
  constructor(private route:Router) { }

  ngOnInit() {
    
  }
  logout(){
         
    localStorage.removeItem('token');
    localStorage.removeItem('isadmin');
    localStorage.removeItem('isloggedIn');
    localStorage.removeItem('username');
    localStorage.removeItem('x');
    localStorage.removeItem('y');
    localStorage.removeItem('p');
    localStorage.removeItem('id');



    this.route.navigate(['login'])
}
}
