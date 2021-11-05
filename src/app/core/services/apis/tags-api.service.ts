import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagsApiService {

  baseUrl: string = 'http://localhost:3000/api';

  constructor(private readonly http: HttpClient) { }

  getAllTag(): Observable<any> {
    return this.http.get(`${this.baseUrl}/tags`);
  }
}
