import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  title;

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://jsonplaceholder.typicode.com/users';

  private url = 'https://api.npms.io/v2/search?q=scope:angular';

  getUsers(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getApi(): Observable<any> {
    return this.http.get<any>(this.url);

  }
}
