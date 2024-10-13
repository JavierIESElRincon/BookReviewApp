import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  books: any = [];

  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks() {
    this.homeService.getBooks().subscribe(response => {
      this.books = response;
    });
  }

  gotoBookForm() {
    this.router.navigateByUrl("/book-form-page");
  }

  deleteBook(id:any){
    this.homeService.delete(id).subscribe(response =>{
      this.getAllBooks();
    })
  }
}