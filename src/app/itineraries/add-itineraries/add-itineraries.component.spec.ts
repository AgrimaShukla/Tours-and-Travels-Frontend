import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItinerariesComponent } from './add-itineraries.component';

describe('AddItinerariesComponent', () => {
  let component: AddItinerariesComponent;
  let fixture: ComponentFixture<AddItinerariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddItinerariesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddItinerariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
