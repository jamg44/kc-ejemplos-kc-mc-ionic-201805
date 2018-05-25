import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

export class Movie {
  rating: number;
  title: string;
  overview: string;
  poster_url: string;
  tagline: string;
  id: number;
}

@Injectable()
export class Api {

  url: string = 'http://localhost:3000';

  constructor(public http: HttpClient) {
  }

  public getMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(this.url + '/movies');
  }

}
