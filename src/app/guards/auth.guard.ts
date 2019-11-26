import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean{
    debugger
    //const user = this.userSessionService.data;
    // const admin = localStorage.getItem('admin');
    let val = undefined;
    // if(val){
    //   return true;      
    // }else{
    //   console.log("insdie else..")
    // }
    return true;
    
    } 
}
