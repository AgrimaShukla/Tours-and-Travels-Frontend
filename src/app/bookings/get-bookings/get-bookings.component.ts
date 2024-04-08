import { Component, inject } from '@angular/core';
import { BookingService } from '../booking.service';
import { SuccessResponseInterface } from '../../shared/interface/successResponse.interface';
import { GetBookings } from '../interfaces/get-bookings.interface';
import { CustomErrorResponse, ErrorResponse } from '../../shared/interface/errorResponse.interface';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-get-bookings',
  templateUrl: './get-bookings.component.html',
  styleUrl: './get-bookings.component.css'
})
export class GetBookingsComponent {
  bookings: [GetBookings];
  bookingService = inject(BookingService);
  messageService = inject(MessageService);

  ngOnInit(){
    this.bookingService.getBookings().subscribe({
      next: (data: SuccessResponseInterface<[GetBookings]>) => {
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
}
