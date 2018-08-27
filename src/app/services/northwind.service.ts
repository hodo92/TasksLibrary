import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NorthWindData} from '../northWindData';
import {Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NorthwindService {

  private northWindUrl = 'http://northwind.servicestack.net/customers.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<NorthWindData[]> {
    return this.http.get<NorthWindData[]>(this.northWindUrl).pipe(
      tap(northwindData => console.log('fetched data')),
      catchError(this.handleError('getData', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
