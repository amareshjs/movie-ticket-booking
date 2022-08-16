import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  auth = new BehaviorSubject<boolean>(false);
  seats = new BehaviorSubject<string[]>([""]);

}
