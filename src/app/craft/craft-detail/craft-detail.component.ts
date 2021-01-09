import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CraftService } from './../services/craft.service';
import { Subscription } from 'rxjs';
import { Craft } from '../models/craft.model';

@Component({
  selector: 'app-craft-detail',
  templateUrl: './craft-detail.component.html',
  styleUrls: ['./craft-detail.component.scss']
})
export class CraftDetailComponent implements OnInit, OnDestroy {

  id: number;
  craft: Craft;
  craftSub$: Subscription;

  constructor(
    private craftService: CraftService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.craftSub$ = this.craftService.craft(this.id)
      .subscribe(craft => {
        this.craft = craft;
        console.log(this.craft);
      });
  }

  ngOnDestroy(): void {
    this.craftSub$.unsubscribe();
  }

}
