import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { BookFormService } from '../services/book-form.service'
import { FormBuilder } from '@angular/forms'
import { Router } from '@angular/router'
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'app-book-form-page',
  templateUrl: './book-form-page.page.html',
  styleUrls: ['./book-form-page.page.scss'],
})
export class BookFormPagePage implements OnInit {

  bookForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
    private bookFormService: BookFormService,
    private route: Router) {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
      author: ['', Validators.compose([Validators.required])],
      genre: ['', Validators.compose([Validators.required])],
      publication_date: ['', Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {
  }

  createBook(){
    if(this.bookForm.valid){
      console.log('Formulario válido:', this.bookForm.value);
      this.bookFormService.create(this.bookForm.value).subscribe(response =>{
        this.route.navigateByUrl("/book-form-page")
      })
    } else {
        console.log('Formulario no válido');
      }
    }

    getFormControl(field: string) {
      return this.bookForm.get(field)
    }
  }
