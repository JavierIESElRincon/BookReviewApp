import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  endpoint = 'http://localhost:8080/api/books';
  serverUrl = 'http://localhost:8080/api/books';

  constructor (private httpClient: HttpClient) { }

  getBooks() {
    return this.httpClient.get(this.endpoint);
  }

  delete(id: any) {
    return this.httpClient.delete(`${this.serverUrl}/${id}`);
  }
}
