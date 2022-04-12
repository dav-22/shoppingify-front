import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url: string = environment.urlBase;
  controller: string = 'item';

  constructor(
    private _http: HttpClient
  ) { }

  all(): Observable<Item[]> {
    return this._http.get<Item[]>(`${this.url}/${this.controller}`);
  }

  add(item: Item): Observable<Item> {
    return this._http.post<Item>(`${this.url}/${this.controller}`, item);
  }
}
