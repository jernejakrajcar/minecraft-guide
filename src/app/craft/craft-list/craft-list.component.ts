import { Component, OnInit } from '@angular/core';
import { CraftService } from './../services/craft.service';
import { Observable } from 'rxjs';
import { Craft } from '../models/craft.model';

@Component({
  selector: 'app-craft-list',
  templateUrl: './craft-list.component.html',
  styleUrls: ['./craft-list.component.scss']
})
export class CraftListComponent implements OnInit {

  crafts$: Observable<Craft[]>;
  constructor(private craftService: CraftService) {}

  ngOnInit(): void {
    this.crafts$ = this.craftService.getCrafts();
  }

}
