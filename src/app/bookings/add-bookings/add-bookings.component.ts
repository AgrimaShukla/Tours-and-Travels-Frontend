import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserBookingService } from '../../shared/services/user-booking.service';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-add-bookings',
  templateUrl: './add-bookings.component.html',
  styleUrl: './add-bookings.component.css'
})
export class AddBookingsComponent {

  userBooking = inject(UserBookingService);
  bookingService = inject(BookingService);
  bookingForm: FormGroup;
  visible: boolean = true;
  bookingDetails: any;

  ngOnInit(){
    this.bookingForm = new FormGroup({
    'name': new FormControl(null, [Validators.required, Validators.pattern('^([A-Za-z]{2,25}\s*)+')]),
    'mobileNumber': new FormControl(null, [Validators.required, Validators.pattern('[6-9][0-9]{9}')]),
    'startDate': new FormControl(null, [Validators.required]),
    'endDate': new FormControl(null, [Validators.required]),
    'noOfPeople': new FormControl(null, [Validators.required]),
    'email': new FormControl(null, [Validators.required])
   })
   this.userBooking.bookingDetails.subscribe({
    next: (data) =>{
      console.log('uuuu')
      console.log(data)
      this.bookingDetails = data;
      console.log(this.bookingDetails)
    }
  })
  }

  onClose(){
     
  }

  onSubmit(form){
    // this.userBooking.bookingDetails.subscribe({
    //   next: (data) =>{
    //     this.bookingDetails = data;
    //     console.log('ppppp')
    //     console.log(this.bookingDetails)
    //   }
    // })
    const name = form.value.name;
    const mobileNumber = form.value.mobileNumber;
    const startDate = form.value.startDate;
    const endDate = form.value.endDate;
    const noOfPeople = form.value.noOfPeople;
    const email = form.value.email;
    const packageId = this.bookingDetails.packageId;
    const daysNight = this.bookingDetails.duration;

    this.bookingService.postBookings(packageId, daysNight, name, mobileNumber, startDate, endDate, noOfPeople, email).subscribe();
  }
}
