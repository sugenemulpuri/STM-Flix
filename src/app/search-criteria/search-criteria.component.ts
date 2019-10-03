import { Component, OnInit } from "@angular/core";
import { TmdbService } from "../tmdb.service";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {
  constructor(private tmdbService: TmdbService, private http: HttpClient) {}

  movieData: any;
  genres: any[];
  name: string;

  getGenres(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=964781403df38499570b6f7233c0a524&language=en-US`
    );
  }
  ngOnInit() {
    this.getGenres().subscribe(response => {
      this.genres = response.genres;
    });

    this.getData("", "gte", 0, "desc");
  }

  getData(
    name: string,
    greaterThanOrLessThan: string,
    runTime: number,
    popularity: string
  ): void {
    this.tmdbService
      .getMovieData(name, greaterThanOrLessThan, runTime, popularity)
      .subscribe(response => {
        this.movieData = response.results;
      });
  }

  searchMovie(searchTerm: string): void {
    this.tmdbService
      .getTitleData(searchTerm)
      .subscribe(response => (this.movieData = response["results"]));
  }

}

