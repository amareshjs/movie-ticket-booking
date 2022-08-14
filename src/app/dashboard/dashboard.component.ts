import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../services/movie-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private _movieApiService: MovieApiService) { }
  movieData: any

  ngOnInit(): void {

    this._movieApiService.getMovie().subscribe((res) => {
      console.log(res)
      this.movieData = res
    })

  }

}
