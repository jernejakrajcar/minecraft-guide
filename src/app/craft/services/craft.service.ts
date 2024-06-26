import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Craft, crafts } from '../models/craft.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CraftService {
  private ROOT_URL = 'http://localhost:3000/crafts';

  constructor(private http: HttpClient) { }

  addCraft(craft: Craft) {
    return this.http.post(this.ROOT_URL, craft);
  }

  getCraftsFromHttp() {
      return this.http.get<Craft[]>(this.ROOT_URL);
  }

  craftFromHttp(id: number) {
    return this.http.get<Craft>(`${this.ROOT_URL}/${id}`);
  }

  getCrafts() {
    return of(crafts);
  }

  craft(id: number) {
    return of(crafts.find(craft => +craft.id === +id));
  }
}
