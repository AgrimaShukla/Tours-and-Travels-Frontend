import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBookingsComponent } from './update-bookings.component';

describe('UpdateBookingsComponent', () => {
  let component: UpdateBookingsComponent;
  let fixture: ComponentFixture<UpdateBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateBookingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
