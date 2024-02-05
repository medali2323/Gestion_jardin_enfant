import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DirecteurService } from './service/directeur.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardD implements CanActivate {
 constructor(private auth:DirecteurService,private route:Router){

 }
 canActivate():boolean{

  if(this.auth.looggedin() )
  { 
  //  this.route.navigateByUrl(this.route.url)
    return true;
    
  
  }
  else{
    this.route.navigate(['login'])
    return false
  }
}

}