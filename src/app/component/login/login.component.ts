import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private _route:Router) { }
  name:string;
  password:string
  
  addform(f){

  }
  ngOnInit(): void {
    
  }
  onSubmit(){
    localStorage.setItem('name',this.name);
    localStorage.setItem('password',this.password);
    sessionStorage.setItem('name',this.name);
    sessionStorage.setItem('password',this.password);
    this._route.navigate(['/homepage'])
  }
  onlogout(){
    this._route.navigate(['/']);
  }
}
