import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  endpoint = 'http://localhost:8080/api/reviews';

  constructor (private httpClient: HttpClient) { }

  createReview(review){
    const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
  
      const body = new URLSearchParams();
      body.append('username', review.username);
      body.append('rating', review.rating);
      body.append('description', review.description);
      body.append('bookId', review.bookId);
  
      return this.httpClient.post(this.endpoint, body.toString(), { headers });

  }

  getReviews(token : string) {
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
