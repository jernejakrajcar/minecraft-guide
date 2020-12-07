import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { crafts } from '../models/craft.model';

@Injectable({
  providedIn: 'root'
})
export class CraftService {

  constructor() { }

  getCrafts() {
    return of(crafts);
  }
}
