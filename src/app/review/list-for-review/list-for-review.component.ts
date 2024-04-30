import { Component, OnInit, inject } from '@angular/core';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-list-for-review',
  templateUrl: './list-for-review.component.html',
  styleUrl: './list-for-review.component.css'
})
export class ListForReviewComponent implements OnInit{
  bookings: any;
  currentBooking: any = null;
  reviewService = inject(ReviewService)
  ngOnInit(): void {
    this.reviewService.getBookings().subscribe({
      next: (bookingForReview: any) => {
        this.bookings = bookingForReview.data;
      }
    })

  }

  addReview(booking_id, package_id){
    this.currentBooking = {"bookingId": booking_id,  "packageId": package_id};
  }
}
