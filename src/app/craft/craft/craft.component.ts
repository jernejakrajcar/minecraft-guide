import { Component, OnInit, Input } from '@angular/core';
import { Craft } from './../models/craft.model';

@Component({
  selector: 'app-craft',
  templateUrl: './craft.component.html',
  styleUrls: ['./craft.component.scss']
})
export class CraftComponent implements OnInit {

  @Input() craft: Craft

  constructor() { }

  ngOnInit(): void {
  }

}
