import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../services/movie-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  playsData: any[] = [];

  movieData: any[] = [];
  constructor(private _movieApiService: MovieApiService) { }

  ngOnInit(): void {

    this._movieApiService.getMovie().subscribe((res) => {
      this.getFilterd(res.data);
    })

  }

  getFilterd(data: any) {
    data.filter((element: any) => {
      if (element.type === "play") {
        this.playsData.push(element)
      } else if (element.type === "Movie") {
        this.movieData.push(element)
      }

    })

  }

}
