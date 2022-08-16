import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { MovieApiService } from 'src/app/services/movie-api.service';


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  emailpattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
  alphaPattern = "[a-zA-Z][a-zA-Z ]+";
  dataObj = {
    customerName: "",
    email: "",
    movieId: this.route.snapshot.params['id'],
    seats: [""]
  }

  seatNo: any[] = []
  movie: any
  constructor(private route: ActivatedRoute,
    private _commonService: CommonService,
    private _movieApiService: MovieApiService,
    private router: Router) { }

  ngOnInit(): void {
    this._commonService.seats.subscribe((res) => {
      this.seatNo = res;
      this.dataObj.seats = res;
    })
    try {

      this._movieApiService.getOneMovie(this.route.snapshot.params['id']).subscribe((res) => {
        this.movie = res
      })
    } catch (error) {
      console.log(error)
    }
  }


  bookSeat = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.pattern(this.alphaPattern)]),
    userEmail: new FormControl('', [Validators.required, Validators.pattern(this.emailpattern)]),
  });

  get userName() {
    return this.bookSeat.get('userName');
  }
  get userEmail() {
    return this.bookSeat.get('userEmail');
  }

  book(data: any) {
    this.dataObj.customerName = data.userName
    this.dataObj.email = data.userEmail
    try {
      this._movieApiService.bookTickets(this.dataObj).subscribe();
    } catch (error) {
      console.log(error)
    }
    alert("ticket Booked");
    this.router.navigateByUrl("/");
  }

}

