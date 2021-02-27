import { Component, OnInit } from '@angular/core';
import { NavbarService } from './services/navbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title$ = this.navbarService.title;

  constructor(private navbarService: NavbarService, private router: Router) {

  }

  ngOnInit(): void {

  }

  readLocalStorageValue() {
    var name = false;
    if(localStorage.getItem('name'))
    {
      name = true;
    }
    else {
      name = false;
    }
    return name;
  }

  logout() {
    localStorage.clear();
  }

}
