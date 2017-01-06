import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import {Hero} from '../modules/hero';

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class HeroService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = '../services/heroes';  // URL to web api

  /**
   * Creates a new HeroService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) {}

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */

  getHero(id: number): Observable<Hero> {
    return this.getHeroes()
               .map(heroes => heroes.find(hero => hero.id === id));
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get(this.heroesUrl)
                    .map((res: Response) => res.json().data)
                    .catch(this.handleError);
  }

  addHeroes(name: string): Observable<Hero> {
    return this.http.post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
                    .map((res: Response) => res.json().data)
                    .catch(this.handleError);
  }

  update(hero: Hero): Observable<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .map(() => hero)
      .catch(this.handleError);
  }

  deleteHero(id: number): Observable<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
                    .map(() => null)
  }
  
  /**
    * Handle HTTP error
    */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

