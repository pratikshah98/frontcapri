import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit(): void {
  }

  onlogout(){
    localStorage.removeItem('name');
    sessionStorage.removeItem('name')
    this._route.navigate(['/']);
  }
}
