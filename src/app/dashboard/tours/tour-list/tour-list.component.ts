import { Component, Input, inject } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { Router } from '@angular/router';
import { UserBookingService } from '../../../shared/services/user-booking.service';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.css'
})
export class TourListComponent {
  dashboardService = inject(DashboardService);
  userBooking = inject(UserBookingService);
  route = inject(Router)
  itineraries: [];
  @Input() singlePackage;
  

  ngOnInit(){
    
    this.dashboardService.getItineraries(this.singlePackage.package_name, this.singlePackage.category, this.singlePackage.duration).subscribe({
      next: (data: any) =>{
        console.log('rrrr')
        console.log(this.singlePackage)
        this.itineraries = data.data[0].itinerary_details;
      }
    })
  }

  bookPackage(){
    this.userBooking.bookingDetails.next(this.singlePackage)
    this.route.navigate(['bookings', 'new'])
  }

}
