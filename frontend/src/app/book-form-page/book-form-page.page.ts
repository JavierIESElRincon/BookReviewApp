import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { BookFormService } from '../services/book-form.service'
import { FormBuilder } from '@angular/forms'
import { Router } from '@angular/router'
import { PhotoService } from '../services/photo.service';
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'app-book-form-page',
  templateUrl: './book-form-page.page.html',
  styleUrls: ['./book-form-page.page.scss'],
})
export class BookFormPagePage implements OnInit {

  bookForm: FormGroup;
  isSubmitted: boolean = false;
  capturedPhoto: string = "";

  constructor(public formBuilder: FormBuilder,
    private bookFormService: BookFormService,
    private photoService: PhotoService,
    private route: Router
  ) {
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

    takePhoto() {
      this.photoService.takePhoto().then(data => {
        this.capturedPhoto = data.webPath ? data.webPath : "";
      });
    }
  
    pickImage() {
      this.photoService.pickImage().then(data => {
         this.capturedPhoto = data.webPath;
       });
    }
  
    discardImage() {
      this.capturedPhoto = "";
    }
  
    async submitForm() {
      this.isSubmitted = true;
      if (!this.bookForm.valid) {
        console.log('Please provide all the required values!')
        return;
      } else {
        let blob: Blob | null = null;
        if (this.capturedPhoto != "") {
          const response = await fetch(this.capturedPhoto);
          blob = await response.blob();
        }
  
        this.bookFormService.createBook(this.bookForm.value, blob).subscribe(data => {
          console.log("Photo sent!");
          this.route.navigateByUrl("/home");
        })
      }
    }







  }
