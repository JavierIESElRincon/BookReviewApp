import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookFormPagePage } from './book-form-page.page';

describe('BookFormPagePage', () => {
  let component: BookFormPagePage;
  let fixture: ComponentFixture<BookFormPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFormPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
