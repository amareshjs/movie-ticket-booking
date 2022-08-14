import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  ngOnInit(): void {
  }

  //variable declarations
  movieTitle: string = "Captain America: The Winter Soldier";
  screen: string = "LUXE CINEMAS";
  time: string = "FRI, 6:45PM"

  rows: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  cols: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  reserved: string[] = ['A2', 'A3', 'F5', 'F1', 'F2', 'F6', 'F7', 'F8', 'H1', 'H2', 'H3', 'H4'];
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
      alert("Selected Seats: " + this.selected + "\nTotal: " + (this.ticketPrice * this.selected.length + this.convFee));
    } else {
      alert("No seats selected!");
    }
  }


























  //   addAdvertise: FormGroup;
  //   numbers: number[];

  //   constructor(fb: FormBuilder) {
  //     this.numbers = Array(5 - 1 + 1).fill(0 - 5).map((_, idx) => 0 + idx)
  //     // this.numbers = Array(25 - 1 + 1).fill(0 - 25).map((_, idx) => 0 + idx)
  //     let group: any
  //     for (let i = 1; i < 6; i++) {
  //       group["a" + i] = [""];
  //     }
  //     for (let i = 1; i < 6; i++) {
  //       group["b" + i] = [""];
  //     }
  //     this.addAdvertise = fb.group(group);
  //     for (let i = 1; i < 6; i++) {
  //       group["c" + i] = [""];
  //     }
  //     this.addAdvertise = fb.group(group);
  //     for (let i = 1; i < 6; i++) {
  //       group["d" + i] = [""];
  //     }
  //     this.addAdvertise = fb.group(group);
  //     for (let i = 1; i < 6; i++) {
  //       group["e" + i] = [""];
  //     }
  //     this.addAdvertise = fb.group(group);

  //   }


  // click(data: any) {
  //   let num: number[] = []
  //   console.log(data);
  //   console.log(JSON.stringify(data))
  //   for (let i = 0; i < 25; i++) {
  //     console.log(typeof (data[i]))
  //     if (data[i] != "") {

  //       num.push(data[i])
  //     }
  //   }
  //   console.log(num)
  // }





}
