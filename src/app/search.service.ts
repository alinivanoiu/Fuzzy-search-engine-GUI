import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseURL = 'http://localhost:8080/search/';
  constructor(private httpClient: HttpClient) {
  }
  search(keywords): Observable<object> {
    return this.httpClient.get<object>(`${this.baseURL}/${keywords}`);
  }
}
