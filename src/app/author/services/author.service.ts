import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { ResponseAuthors } from '../interfaces/author';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  constructor(private http: HttpClient) {}

  getAuthors() {
    return this.http.get<ResponseAuthors>(`${environment.baseUrl}/author`);
  }
}
