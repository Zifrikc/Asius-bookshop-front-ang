import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  constructor(private router: Router) {}
  title = 'Asius-bookshop-frontend';
  isNotIndexPage(): boolean {
    return this.router.url !== '/';
  }
}

