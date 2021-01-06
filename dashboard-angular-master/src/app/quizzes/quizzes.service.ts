import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {

  private baseUrl='http://127.0.0.1:8000/api/quizzes';
  constructor(private http: HttpClient) { }

  getAllQuizzes(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getQuizzFindId(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  deleteQuizz(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  updateQuizz(id: number, value: any): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}` , value);
  }

  createQuizz(quizzes: Object){
    return this.http.post(`${this.baseUrl}`,quizzes);
  }
}
