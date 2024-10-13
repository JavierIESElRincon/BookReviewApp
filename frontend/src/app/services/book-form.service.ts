import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookFormService {

  serverUrl = 'http://localhost:8080/api/books';

  constructor(private httpClient: HttpClient) { }

  create (book: any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();
    body.append('title', book.title);
    body.append('author', book.author);
    body.append('genre', book.genre);
    body.append('publication_date', book.publication_date);

    return this.httpClient.post(this.serverUrl, body.toString(), { headers });
  }
}
