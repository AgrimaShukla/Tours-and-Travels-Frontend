import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserBookingService } from '../../../../shared/services/user-booking.service';
import { DashboardService } from '../../../dashboard.service';
import { SuccessResponseInterface } from '../../../../shared/interface/successResponse.interface';
import { GetTourList, ItineraryDetails } from '../../../interfaces/get-tours-list.interface';
import { MessageService } from 'primeng/api';
import { CustomErrorResponse, ErrorResponse } from '../../../../shared/interface/errorResponse.interface';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.css'
})
export class TourListComponent {
  dashboardService = inject(DashboardService);
  userBooking = inject(UserBookingService);
  messageService = inject(MessageService);
  route = inject(Router)
  itineraries: [];
  @Input() singlePackage;
  

  ngOnInit(){
    
    this.dashboardService.getItineraries(this.singlePackage.package_name, this.singlePackage.category, this.singlePackage.duration).subscribe({
      next: (data: SuccessResponseInterface<GetTourList<ItineraryDetails>>) =>{
        this.itineraries = data.data[0].itinerary_details;
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

  bookPackage(){
    this.userBooking.bookingDetails.next(this.singlePackage)
    this.route.navigate(['bookings', 'new'])
  }

}
