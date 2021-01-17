import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private baseUrl = 'http://127.0.0.1:8000/api/categories';

  constructor(private http: HttpClient) {}

  getCategory(id: number): Observable<any> {
    const auth_token = localStorage.getItem('AccessToken');
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + auth_token,
    });
    return this.http.get(`${this.baseUrl}/${id}`, { headers: reqHeader });
  }

  getCategoryList(): Observable<any> {
    const auth_token = localStorage.getItem('AccessToken');
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + auth_token,
    });
    return this.http.get(`${this.baseUrl}`, { headers: reqHeader });
  }

  createCategory(category: Object): Observable<Object> {
    const auth_token = localStorage.getItem('AccessToken');
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + auth_token,
    });
    return this.http.post(`${this.baseUrl}`, category, { headers: reqHeader });
  }

  deleteCategory(id: number): Observable<any> {
    const auth_token = localStorage.getItem('AccessToken');
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + auth_token,
    });
    return this.http.delete(`${this.baseUrl}/${id}`, {
      responseType: 'text',
      headers: reqHeader,
    });
  }

  updateCategory(id: number, value: any): Observable<Object> {
    const auth_token = localStorage.getItem('AccessToken');
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + auth_token,
    });
    return this.http.put(`${this.baseUrl}/${id}`, value, {
      headers: reqHeader,
    });
  }
  addQuizToCategory(category_id: number, quiz_id: number) {
    const data = {
      'category_id': category_id,
      'quiz_id': quiz_id,
    };
    const auth_token = localStorage.getItem('AccessToken');
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + auth_token,
    });
    return this.http.post(`http://127.0.0.1:8000/api/categoryQuiz`, data, { headers: reqHeader });
  }
  deleteQuizFromCategory(quiz_id: number,category_id: number) {

    const auth_token = localStorage.getItem('AccessToken');
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + auth_token,
    });
    return this.http.delete(`http://127.0.0.1:8000/api/categoryQuiz/${quiz_id}/${category_id}`, { headers: reqHeader });
  }
}
