import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
    
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Client } from './client';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

	private apiURL = "http://localhost:3000";
	httpOptions = {
		headers: new HttpHeaders({
		  'Content-Type': 'application/json'
		})
	  }
	   
	  constructor(private httpClient: HttpClient) { }

	  getAll(): Observable<Client[]> {
		return this.httpClient.get<Client[]>(this.apiURL + '/clients/')
		.pipe(
		  catchError(this.errorHandler)
		)
	  }

	  create(client: Client): Observable<Client> {
		return this.httpClient.post<Client>(this.apiURL + '/clients/', JSON.stringify(client), this.httpOptions)
		.pipe(
		  catchError(this.errorHandler)
		)
	  }  

	  find(id: number): Observable<Client> {
		return this.httpClient.get<Client>(this.apiURL + '/clients/' + id)
		.pipe(
		  catchError(this.errorHandler)
		)
	  }

	  update(id: number, client: Client): Observable<Client> {
		return this.httpClient.put<Client>(this.apiURL + '/clients/' + id, JSON.stringify(client), this.httpOptions)
		.pipe(
		  catchError(this.errorHandler)
		)
	  }
		
	  delete(id: number){
		return this.httpClient.delete<Client>(this.apiURL + '/clients/' + id, this.httpOptions)
		.pipe(
		  catchError(this.errorHandler)
		)
	  }

	  errorHandler(error:any) {
		let errorMessage = '';
		if(error.error instanceof ErrorEvent) {
		  errorMessage = error.error.message;
		} else {
		  errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
		}
		return throwError(errorMessage);
	 }
		
}
