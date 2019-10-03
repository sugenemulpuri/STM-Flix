import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { WatchListPageComponent } from "./watch-list-page/watch-list-page.component";

@Injectable({
  providedIn: "root"
})
export class TmdbService {
  genres: any[];
  watchList = [];
  constructor(private http: HttpClient) {}
  getMovieData(
    name: string,
    greaterThanOrLessThan: string,
    runTime: number,
    popularity: string
  ): Observable<any> {
    return this.http
      .get(`https://api.themoviedb.org/3/discover/movie?api_key=964781403df38499570b6f7233c0a524&language=en-US&with_genres=${name}&vote_count.gte=1000&with_runtime.${greaterThanOrLessThan}=${runTime}&sort_by=vote_average.${popularity}
  `);
  }
  getTitleData(searchTerm: string): Observable<any> {
    return this.http
      .get(`https://api.themoviedb.org/3/search/movie?api_key=15e5712ff47e4688d1f70d94261a6c5d&query=${searchTerm}
  `);
  }

  getDetails(movieID: number): Observable<any> {
    return this.http
      .get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=15e5712ff47e4688d1f70d94261a6c5d&language=en-US
      `);
  }
  getNewWatchList(movie): void {
    this.watchList.push(movie);
  }
  getWatchList() {
    return this.watchList;
  }
  onRemoveHandler(index): void {
    this.watchList.splice(index, 1);
  }
}
