import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeatsApiService {

  constructor(private http: HttpClient) { }
  getSeats(data: any): Observable<any> {
    return this.http.get(`${environment.seatsUrl}` + data);
  }
}

