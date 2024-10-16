import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CandiateService {
  private apiUrl = 'https://api.michaelthehomebuyer.ca/manatal/candidate'; // Your Node.js API URL

  constructor(private http: HttpClient) {}

  getCandidates(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Error fetching candidates:', error);
    return throwError('Failed to fetch candidates. Please try again later.');
  }
}