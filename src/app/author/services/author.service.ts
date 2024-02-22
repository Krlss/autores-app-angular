import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { ResponseAuthors, ResponseBooks } from '../interfaces/author';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  constructor(private http: HttpClient) {}

  getAuthors(): Observable<ResponseAuthors> {
    return this.http.get<ResponseAuthors>(`${environment.baseUrl}/author`);
  }

  getBooksByAuthor(author: string): Observable<ResponseBooks[]> {
    return this.http.get<ResponseBooks[]>(
      `${environment.baseUrl}/author/${author}`
    );
  }

  getBookByAuthorAndTitle(author: string, title: string): Observable<ResponseBooks[]> {
    return this.http.get<ResponseBooks[]>(
      `${environment.baseUrl}/author,title/${author};${title}`
    );
  }
}
