import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookFormPagePage } from './book-form-page.page';



const routes: Routes = [
  {
    path: '',
    component: BookFormPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookFormPagePageRoutingModule {}
