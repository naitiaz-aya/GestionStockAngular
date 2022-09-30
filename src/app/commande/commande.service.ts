import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
    
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Client } from '../client/client';
import { Commande } from './commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
	private apiURL = "http://localhost:3000";
	httpOptions = {
		headers: new HttpHeaders({
		  'Content-Type': 'application/json'
		})
	  }

	  constructor(private httpClient: HttpClient) { }

	  getAll(): Observable<Commande[]> {
		return this.httpClient.get<Commande[]>(this.apiURL + '/commandes/')
		.pipe(
		  catchError(this.errorHandler)
		)
	  }
	  create(commande: Commande): Observable<Commande> {
		return this.httpClient.post<Commande>(this.apiURL + '/commandes/', JSON.stringify(commande), this.httpOptions)
		.pipe(
		  catchError(this.errorHandler)
		)
	  }  

	  find(id: number): Observable<Commande> {
		return this.httpClient.get<Commande>(this.apiURL + '/commandes/' + id)
		.pipe(
		  catchError(this.errorHandler)
		)
	  }

	  update(id: number, commande: Commande): Observable<Commande> {
		return this.httpClient.put<Commande>(this.apiURL + '/commandes/' + id, JSON.stringify(commande), this.httpOptions)
		.pipe(
		  catchError(this.errorHandler)
		)
	  }
		
	  delete(id: number){
		return this.httpClient.delete<Commande>(this.apiURL + '/commandes/' + id, this.httpOptions)
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
