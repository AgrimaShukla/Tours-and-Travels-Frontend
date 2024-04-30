import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserBookingService } from '../../shared/services/user-booking.service';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';
import { SuccessResponseInterface } from '../../shared/interface/successResponse.interface';
import { AddBookings } from '../interfaces/add-bookings.interface';
import { MessageService } from 'primeng/api';
import { CustomErrorResponse, ErrorResponse } from '../../shared/interface/errorResponse.interface';

@Component({
  selector: 'app-add-bookings',
  templateUrl: './add-bookings.component.html',
  styleUrl: './add-bookings.component.css'
})
export class AddBookingsComponent {

  userBooking = inject(UserBookingService);
  bookingService = inject(BookingService);
  router = inject(Router);
  messageService = inject(MessageService)
  bookingForm: FormGroup;
  visible: boolean = true;
  bookingDetails: any;
  today;

  ngOnInit(){
    this.bookingForm = new FormGroup({
    'name': new FormControl(null, [Validators.required]),
    'mobileNumber': new FormControl(null, [Validators.required]),
    'startDate': new FormControl(null, [Validators.required]),
    'noOfPeople': new FormControl(null, [Validators.required]),
    'email': new FormControl(null, [Validators.required])
   })
   this.userBooking.bookingDetails.subscribe({
    next: (data) =>{
      this.bookingDetails = data;
    }
  })
    
  }
  
  onClose(){
    this.visible = false;
    this.router.navigate(['dashboard'])
  }
  
  onSubmit(form){
    const name = form.value.name;
    const mobileNumber = form.value.mobileNumber;
    const startDate = form.value.startDate;
    const noOfPeople = form.value.noOfPeople;
    const email = form.value.email;
    const packageId = this.bookingDetails.packageId;
    const daysNight = this.bookingDetails.duration;
    this.bookingService.postBookings(packageId, daysNight, name, mobileNumber, startDate, noOfPeople, email).subscribe({
      next: (data: SuccessResponseInterface<[AddBookings]>) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: data.message,
        });
      },
      error: (error: ErrorResponse<CustomErrorResponse>) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: error.error.description,
        });
      }
      
    });
    this.visible = false;
  }
  
  ngAfterViewInit(){
    this.today = new Date().toISOString().split('T')[0];
    document.getElementById('startDate').setAttribute('min', this.today);

  }
}
