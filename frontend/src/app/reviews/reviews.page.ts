import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router'
import { ReviewService } from '../services/review.service'

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage implements OnInit {

  reviews: any = [];

  constructor(private reviewService: ReviewService, private router: Router, private authService: AuthService, private storage: Storage ) {}

  ngOnInit() {
    this.getAllReviews();
  }

  async getAllReviews() {
    let token = await this.storage.get("token");
    this.reviewService.getReviews(token).subscribe({
      next: res => {
        console.log("User Logged in. This is the motorbike list:");
        this.reviews = res;
      }, error: error => {
        console.log(error);
        console.log("User not authenticated. Please log in");
        this.router.navigateByUrl("/login");
      }
    });
  }

  deleteReviews(id:any){
    this.reviewService.delete(id).subscribe(response =>{
      this.getAllReviews();
    })
  }
}
