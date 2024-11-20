import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  endpoint = 'http://localhost:8080/api/books';

  constructor (private httpClient: HttpClient) { }

  getBooks(token : string) {
    let myOptions = this.getOptions(token);
    return this.httpClient.get(this.endpoint, myOptions);
  }

  delete(id: any) {
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }

  private getOptions(token: string){

    let bearerAccess = 'Bearer ' + token;

    let options = {
      headers: {
        'Authorization' : bearerAccess,
        // 'Content-Type' : 'application/x-www-form-urlencoded',
      }
      //, withCredentials: true
    };
    return options;
  }
}
