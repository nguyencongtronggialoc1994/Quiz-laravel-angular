import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ResultService {


  private baseUrl = 'http://127.0.0.1:8000/api/results';

  constructor(private http: HttpClient) {
  }

  // getCategory(id: number): Observable<any> {
  //   const auth_token = localStorage.getItem('AccessToken');
  //   const reqHeader = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer ' + auth_token
  //   });
  //   return this.http.get(`${this.baseUrl}/${id}`,{headers: reqHeader});
  // }

  getResultList(): Observable<any> {
    const auth_token = localStorage.getItem('AccessToken');
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token
    });
    return this.http.get(`${this.baseUrl}`, {headers: reqHeader});
  }



  deleteResult(id: number): Observable<any> {
    const auth_token = localStorage.getItem('AccessToken');
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token
    });
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text', headers: reqHeader});
  }



}
