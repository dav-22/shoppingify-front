import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { List } from '../models/list';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  url: string = environment.urlBase;
  controller: string = 'list';

  constructor(private _http: HttpClient) { }

  all(): Observable<List[]> {
    return this._http.get<List[]>(`${this.url}/${this.controller}`);
  }
}
