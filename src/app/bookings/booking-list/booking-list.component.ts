import { Component, inject } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrl: './booking-list.component.css'
})
export class BookingListComponent {

  bookings: any;
  bookingService = inject(BookingService);
  ngOnInit(){
    this.bookingService.getBookings().subscribe({
      next: (data: any) =>{
        console.log(data.data)
        this.bookings = data.data;
      }}
    )
  }
}
