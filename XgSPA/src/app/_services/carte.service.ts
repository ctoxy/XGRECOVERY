import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Value } from '../model/value.model';

@Injectable({
  providedIn: 'root'
})
export class CarteService {
  baseUrl = 'http://localhost:5000/api/values/';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: ban-types
  getValues(): Observable<Value[]> {
    return this.http.get<Value[]>(this.baseUrl);
  }
}
