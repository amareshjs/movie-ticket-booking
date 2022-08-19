import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../services/movie-api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movieData: any[] = []
  allData: any[] = []

  constructor(private _movieApiService: MovieApiService) { }

  ngOnInit(): void {
    this._movieApiService.getMovie().subscribe((res) => {
      this.allData = res.data;
      this.getFilterd(this.allData)
    })
  }
  getFilterd(data: any) {
    data.filter((element: any) => {
      if (element.type === "Movie") {
        this.movieData.push(element)
      }
    })
  }
}
