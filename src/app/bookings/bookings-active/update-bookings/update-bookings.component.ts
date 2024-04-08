import { Component, Input, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../../booking.service';
import { SuccessResponseInterface } from '../../../shared/interface/successResponse.interface';

@Component({
  selector: 'app-update-bookings',
  templateUrl: './update-bookings.component.html',
  styleUrl: './update-bookings.component.css'
})
export class UpdateBookingsComponent {

  bookingService = inject(BookingService);
  bookingForm: FormGroup;
  @Input() booking: any; 
  visible: boolean = true;

  ngOnInit(){
    this.bookingForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'mobileNumber': new FormControl(null, [Validators.required]),
      'startDate': new FormControl(null, [Validators.required]),
      'noOfPeople': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required])
    });
  }

  onClose(){
    this.visible = false;
  }

  onSubmit(form){
    const name = form.value.name;
    const mobileNumber = form.value.mobileNumber;
    const startDate = form.value.startDate;
    const noOfPeople = form.value.noOfPeople;
    const email = form.value.email;
    this.bookingService.updateBookings(this.booking.booking_id, name, mobileNumber, startDate, noOfPeople, email).subscribe({
      next: (data: SuccessResponseInterface<null>) => {

      }
    })
  }
}
