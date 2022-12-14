import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http: HttpClient) { }

  getMovie(): Observable<any> {
    return this.http.get(`${environment.movieUrl}`);
  }

  getOneMovie(data: any): Observable<any> {
    return this.http.get(`${environment.movieUrl + data}`);
  }

  bookTickets(data: any): Observable<any> {
    return this.http.post(`${environment.bookingUrl}`, data)
  }

  getBookings(): Observable<any> {
    return this.http.get(`${environment.bookingUrl}`)
  }
}
