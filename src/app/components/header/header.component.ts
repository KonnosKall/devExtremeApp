import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRoute } from './header.interface';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 

  // public routes: IRoute[] = [
  //   {
  //     'pageTitle': 'Dashboard',
  //     'pageLink': '/'
  //   },
  //   {
  //     'pageTitle': 'Login',
  //     'pageLink': '/login'
  //   },
  //   {
  //     'pageTitle': 'Register',
  //     'pageLink': '/register'
  //   }
  // ];

  constructor(private router: Router) {

  }
  itemClick(e: any) {
    this.router.navigate([e.itemData.pageLink]);
  }

  ngOnInit(): void {
  }
}