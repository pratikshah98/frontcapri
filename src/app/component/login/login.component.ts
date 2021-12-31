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
    sessionStorage.setItem('name',this.name);
    this._route.navigate(['/homepage'])
  }
}
