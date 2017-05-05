import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

import { Hero } from '../models/hero';

@Injectable()
export class HeroSearchService {

  constructor(private _http: Http) { }

  search(term: string): Observable<Hero[]> {
    return this._http.get(`api/heroes/?name=${term}`)
      .map(response => response.json().data as Hero[]);
  }
}
