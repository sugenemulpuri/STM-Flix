import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { TmdbService } from "../tmdb.service";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-watch-list-page",
  templateUrl: "./watch-list-page.component.html",
  styleUrls: ["./watch-list-page.component.css"]
})
export class WatchListPageComponent implements OnInit {
  watchList: any[] = [];
  @Output() onRemove = new EventEmitter<any>();
  constructor(private tmdbService: TmdbService, private http: HttpClient) {}

  removeMovie(index: number): void {
    this.tmdbService.onRemoveHandler(index);
  }

  ngOnInit() {
    this.watchList = this.tmdbService.getWatchList();
  }
}
