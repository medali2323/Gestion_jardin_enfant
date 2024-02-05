import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangepassService  implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Add Auth Token
    // In production you would get the token value from an auth service
    const token = localStorage.getItem("token")
  if(token)
{
const clone=req.clone({
  headers:req.headers.set("Authorization","BeaRER "+ token)
});
return  next.handle(clone);

}
 else {
 return  next.handle(req);
 } 
  }
}