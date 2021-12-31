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
    console.log(this.name);
    if (this.name != null) {
      return true;
    }
    else{
       this._route.navigate(['/']);
      return false;

    }
  }
}
