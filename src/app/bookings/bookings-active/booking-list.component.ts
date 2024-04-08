import { Component, inject } from '@angular/core';
import { BookingService } from '../booking.service';
import { SuccessResponseInterface } from '../../shared/interface/successResponse.interface';
import { GetBookings } from '../interfaces/get-bookings.interface';
import { MessageService } from 'primeng/api';
import { CustomErrorResponse, ErrorResponse } from '../../shared/interface/errorResponse.interface';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrl: './booking-list.component.css'
})
export class BookingListComponent {

  bookings: [GetBookings];
  updated: boolean = false;
  bookingService = inject(BookingService);
  messageService = inject(MessageService);
  currentBooking: any;

  ngOnInit(){
    this.bookingService.getActiveBookings().subscribe({
      next: (data: SuccessResponseInterface<[GetBookings]>) =>{
        this.bookings = data.data;
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
    })
  }

  update(bookings){
    this.updated = true;
    this.currentBooking = bookings;
  }

  cancel(bookings){
    this.bookingService.cancelBookings(bookings.booking_id).subscribe({
      next: (data: SuccessResponseInterface<null>) => {
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
    })
  }
}
