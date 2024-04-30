import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListForReviewComponent } from './list-for-review.component';

describe('ListForReviewComponent', () => {
  let component: ListForReviewComponent;
  let fixture: ComponentFixture<ListForReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListForReviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListForReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
