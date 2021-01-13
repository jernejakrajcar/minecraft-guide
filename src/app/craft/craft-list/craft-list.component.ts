import { Component, OnInit } from '@angular/core';
import { CraftService } from './../services/craft.service';
import { NavbarService } from 'src/app/navbar/services/navbar.service';
import { Observable } from 'rxjs';
import { Craft } from '../models/craft.model';

@Component({
  selector: 'app-craft-list',
  templateUrl: './craft-list.component.html',
  styleUrls: ['./craft-list.component.scss']
})


export class CraftListComponent implements OnInit {


  constructor(
    private craftService: CraftService,
    private navbarService: NavbarService,
  ){ }

  crafts$: Observable<Craft[]>;

  ngOnInit(): void {
    this.crafts$ = this.craftService.getCraftsFromHttp();
    this.navbarService.title.next('Crafting Guide');
  }

}

// export class CraftListComponent {
//   constructor(
//     private craftService: CraftService,
//     private navbarService: NavbarService
//   ) {}
//
//   public getCrafts(): Observable<Craft[]>{
//     return this.get<Craft[]>(this.url);
//   }
// }
