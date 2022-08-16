import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { MovieApiService } from '../services/movie-api.service';
import { SeatsApiService } from '../services/seats-api.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit, OnDestroy {
  constructor(private _movieApiService: MovieApiService,
    private _seatsApiService: SeatsApiService,
    private _commonService: CommonService,
    private router: Router,
    private route: ActivatedRoute) { }
  ngOnDestroy(): void {
    this._commonService.auth.next(false);
  }

  ngOnInit(): void {
    this.movieId = this.route.snapshot.params['id'];
    this._movieApiService.getOneMovie(this.movieId).subscribe((res) => {
      this.movieData = res;
    })
    this._seatsApiService.getSeats(this.movieId).subscribe((res) => {
      this.getMergedArray(res)
    })
  }
  movieId: any
  movieData: any

  rows: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  cols: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  reserved: string[] = [];
  selected: string[] = [];

  ticketPrice: number = 120;
  convFee: number = 30;
  totalPrice: number = 0;
  currency: string = "Rs";

  //return status of each seat
  getStatus(seatPos: string) {
    if (this.reserved.indexOf(seatPos) !== -1) {
      return 'reserved';
    } else if (this.selected.indexOf(seatPos) !== -1) {
      return 'selected';
    } else {
      return 0;
    }

  }
  //return merged array of reserved seats
  getMergedArray(data: any[]) {
    data.forEach(element => {

      this.reserved = this.reserved.concat(element.seats)

    });
  }


  //clear handler
  clearSelected() {
    this.selected = [];
  }
  //click handler
  seatClicked(seatPos: string) {
    let index = this.selected.indexOf(seatPos);

    if (index !== -1) {
      // seat already selected, remove
      this.selected.splice(index, 1)
    } else {
      //push to selected array only if it is not reserved
      if (this.reserved.indexOf(seatPos) === -1)
        this.selected.push(seatPos);
    }
  }
  //Buy button handler
  showSelected() {
    if (this.selected.length > 0) {
      this._commonService.auth.next(true);
      this._commonService.seats.next(this.selected);
      // alert("Selected Seats: " + this.selected + "\nTotal: " + (this.ticketPrice * this.selected.length + this.convFee));
      this.router.navigateByUrl("ticket/confirm/" + this.movieId);
    } else {
      alert("No seats selected!");
    }
  }
























}
