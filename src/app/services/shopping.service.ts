import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  url: string = environment.urlBase;
  controller: string = 'shopping';

  constructor(private _http: HttpClient) { }

  addShoppingList(itemList: any, listName: string): Observable<any> {
    return this._http.post<any>(`${this.url}/${this.controller}`, {itemList: itemList, listName: listName});
  }
}
