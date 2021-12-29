import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthguardService {
  name:string | null;
  password:string | null;
  constructor(private _route:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.name = localStorage.getItem('name') ;
    this.password = localStorage.getItem('password');
    if(this.name!=null || this.password!=null){
      return true;
    }
    else{
      alert('Login Account' );
      this._route.navigate(['/']);
      return false;

    }
  }
}
