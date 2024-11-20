import { Component, OnInit  } from '@angular/core';
import { HomeService } from '../services/home.service'
import { Router } from '@angular/router'
import { AuthService } from '../auth/auth.service';
import { Storage } from '@ionic/storage-angular';
import { ReviewService } from '../services/review.service'
import { FormBuilder, FormGroup } from '@angular/forms'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {

  reviewForm: FormGroup;
  books: any = [];
  searchedBook: any = [];

  constructor(private homeService: HomeService, private router: Router, private authService: AuthService,
     private storage: Storage, private reviewService : ReviewService, public formBuilder: FormBuilder) {
      this.reviewForm = this.formBuilder.group({
        username: [''],
        rating: [''],
        description: [''],
        bookId: ['']
      })
     }

  ngOnInit() {
    this.getAllBooks();
  }

  async getAllBooks() {
    let token = await this.storage.get("token");
    this.homeService.getBooks(token).subscribe({
      next: res => {
        console.log("User Logged in.");
        this.books = res;
        this.searchedBook = this.books;
      }, error: error => {
        console.log(error);
        console.log("User not authenticated. Please log in");
        this.router.navigateByUrl("/login");
      }
    });
  }

  gotoBookForm() {
    this.router.navigateByUrl("/book-form-page");
  }

  gotoReviews() {
    this.router.navigateByUrl("/reviews");
  }

  deleteBook(id:any){
    this.homeService.delete(id).subscribe(response =>{
      this.getAllBooks();
    })
  }

  loginOrJustEnter(){
    this.authService.isLoggedIn().then(loggedIn => {

      if(loggedIn){
        this.router.navigateByUrl("/home");
        return;
      } 
      this.router.navigateByUrl("/login");
    })
  }

  searchBooks(event){
    const text = event.target.value;
    this.searchedBook = this.books;
    if(text && text.trim() != ''){
      this.searchedBook = this.searchedBook.filter((books: any) =>{
        return (books.title.toLowerCase().indexOf(text.toLowerCase()) > -1);
      })
    }
  }

  async submitFormReview() {
    this.reviewService.createReview(this.reviewForm.value).subscribe(data => {
      this.router.navigateByUrl("/home");
    })
  }
}