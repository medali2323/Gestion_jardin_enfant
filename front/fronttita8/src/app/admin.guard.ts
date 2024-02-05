import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DirecteurService } from './service/directeur.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private auth:DirecteurService,private route :Router){
 
  }
  canActivate():boolean{
 if(this.route.url=="/login") {
   console.log(this.auth.isAdmin())
   if( this.auth.isAdmin() )
   { 
   //  this.route.navigateByUrl(this.route.url)
     return true;
     
   
   }
   else{
     this.route.navigate(['forbidden'])
     return false
   }
 }
  else
  {
   console.log( "hhh" + this.auth.isAdmin2())
   let x=localStorage.getItem("x")
   let y=localStorage.getItem("adj")

   if( y=="true" 
   //&& this.auth.isAdmin2() 
   ){ 
   //  this.route.navigateByUrl(this.route.url)
     return true;
  }
  else{
   this.route.navigate(['forbidden'])
   return false
 }
 }
 }
 }