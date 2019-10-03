import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { SearchCriteriaComponent } from "./search-criteria/search-criteria.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { WatchListPageComponent } from "./watch-list-page/watch-list-page.component";
import { TmdbService } from "./tmdb.service";
import { HttpClientModule } from "@angular/common/http";
import { DetailsComponent } from "./details/details.component";

const appRoutes: Routes = [
  { path: "Movie-List", component: MovieListComponent },
  { path: "Watch-List", component: WatchListPageComponent },
  { path: "details/:id", component: DetailsComponent },
  { path: "", redirectTo: "/Movie-List", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchCriteriaComponent,
    MovieListComponent,
    WatchListPageComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [TmdbService],
  bootstrap: [AppComponent]
})
export class AppModule {}
