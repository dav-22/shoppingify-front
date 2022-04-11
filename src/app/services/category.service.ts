import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url: string = environment.urlBase;
  controller: string = 'category';

  constructor(private _http: HttpClient) { }

  add(category: Category): Observable<Category> {
    return this._http.post<Category>(`${this.url}/${this.controller}`, category);
  }

}
