import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private baseUrl = 'http://127.0.0.1:8000/api/categories';

  constructor(private http: HttpClient) {
  }

  getCategoryList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
