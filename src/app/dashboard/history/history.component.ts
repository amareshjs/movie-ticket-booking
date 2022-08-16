import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(private _movieApiService: MovieApiService) { }

  bookingData: any

  ngOnInit(): void {

    this._movieApiService.getBookings().subscribe((res) => {
      this.bookingData = res
    })

  }

}
