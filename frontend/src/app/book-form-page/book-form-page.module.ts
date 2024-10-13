import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookFormPagePageRoutingModule } from './book-form-page-routing.module';

import { BookFormPagePage } from './book-form-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookFormPagePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [BookFormPagePage]
})
export class BookFormPagePageModule {}
