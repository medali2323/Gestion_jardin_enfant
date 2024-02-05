import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { promise } from 'selenium-webdriver';
import { DirecteurService } from './service/directeur.service';

@Injectable({
  providedIn: 'root'
})
export class ParentguardGuard implements CanActivate  {
  constructor(private enfservice:DirecteurService,private route:Router){}
  canActivate():Promise<boolean>{
    return new Promise(resolve=>{
      let users:any=[]
      this.enfservice.gettalluser().subscribe(res => {
        console.log(res)
        users = res
        let myUser = users.filter(u => u.username == localStorage.getItem("username"))[0]
        console.log(myUser)
        if (myUser["is_parent"]) {
        resolve(true)
        }
        else
        {
          this.route.navigate(['forbidden'])
          resolve(false)

        }
    })
  
  })
}
}
