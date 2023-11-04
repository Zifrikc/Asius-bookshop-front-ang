import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksBuyComponent } from './books-buy.component';

describe('BooksBuyComponent', () => {
  let component: BooksBuyComponent;
  let fixture: ComponentFixture<BooksBuyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksBuyComponent]
    });
    fixture = TestBed.createComponent(BooksBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
