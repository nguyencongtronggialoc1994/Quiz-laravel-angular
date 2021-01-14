import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import {hasErrors} from "@angular/compiler-cli/ngcc/src/packages/transformer";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): Observable<any> {
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const data = {
      'email': email,
      'password': password
    };
    return this.http.post(`http://127.0.0.1:8000/api/login`, data, {headers: reqHeader, responseType: 'json'});
  }

  register(user: Object): Observable<Object> {
    return this.http.post(`http://127.0.0.1:8000/api/register`, user);
  }

  changePassword(id: number, value: any): Observable<Object> {
    const auth_token = localStorage.getItem('AccessToken');
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token
    });
    return this.http.put(`http://127.0.0.1:8000/api/users/${id}`, value,{headers: reqHeader});
  }

  getUser(id: number): Observable<any> {
    const auth_token = localStorage.getItem('AccessToken');
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token
    });
    return this.http.get(`http://127.0.0.1:8000/api/users/${id}`,{headers: reqHeader});
  }

  getIdByEmail(email: string): Observable<any> {
    const auth_token = localStorage.getItem('AccessToken');
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token
    });
    return this.http.get(`http://127.0.0.1:8000/api/users/getId/${email}`,{headers:reqHeader});
  }
  getRole(email: string): Observable<any> {
    const auth_token = localStorage.getItem('AccessToken');
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token
    });
    return this.http.get(`http://127.0.0.1:8000/api/users/role/${email}`,{headers:reqHeader});
  }
  getUserList(): Observable<any>{
    const auth_token = localStorage.getItem('AccessToken');
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token
    });
    return this.http.get(`http://127.0.0.1:8000/api/users`,{headers: reqHeader});
  }
  updateRole(id: number,role_id: number): Observable<any>{
    const data={'role_id':role_id};
    const auth_token = localStorage.getItem('AccessToken');
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token
    });
    return this.http.put(`http://127.0.0.1:8000/api/role-user/${id}`,data,{headers:reqHeader});
  }


}
