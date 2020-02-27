import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Value } from '../../model/value.model';
import { STUDENTS } from './mock.data';
import { catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarteService {
  baseUrl = 'http://localhost:5000/api/values/';
  private values: Value[] = [];
  // students = STUDENTS['0']['data'];
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: ban-types
  getValues(): Observable<Value[]> {
    return this.http.get<Value[]>(this.baseUrl);
  }
  getAllValues()  {
    return this.http.get<Value[]>(this.baseUrl);
  }

  getData() {
    return this.http.get(this.baseUrl).pipe(
      tap(_ => this.log('test')),
      catchError(this.handleError())
    );
  }


  private handleError<T>(operation= 'operation', result?:T) {
    // console.log('error');
    return null;
  }

  private log(message: string) {
    // console.log('log')
  }
}
