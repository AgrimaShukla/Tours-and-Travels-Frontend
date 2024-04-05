import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateItinerariesComponent } from './update-itineraries.component';

describe('UpdateItinerariesComponent', () => {
  let component: UpdateItinerariesComponent;
  let fixture: ComponentFixture<UpdateItinerariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateItinerariesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateItinerariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
