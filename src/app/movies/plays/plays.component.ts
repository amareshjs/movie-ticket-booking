import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-plays',
  templateUrl: './plays.component.html',
  styleUrls: ['./plays.component.scss']
})
export class PlaysComponent implements OnInit {

  playsData: any[] = [];
  allData: any[] = [];
  constructor(private _movieApiService: MovieApiService) { }

  ngOnInit(): void {
    this._movieApiService.getMovie().subscribe((res) => {
      this.allData = res
      this.getFilterd(this.allData)
    })
  }

  getFilterd(data: any) {
    data.filter((element: any) => {
      if (element.type === "play") {
        this.playsData.push(element)
      }
    })
  }

}
