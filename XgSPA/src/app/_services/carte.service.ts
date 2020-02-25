import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarteService {
  baseUrl = 'http://localhost:5000/api/values/';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: ban-types
  getValues(): Observable<Object> {
    return this.http.get(this.baseUrl);
  }
}
