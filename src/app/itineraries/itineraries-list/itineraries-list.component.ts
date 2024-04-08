import { Component, inject } from '@angular/core';
import { ItineraryService } from '../itineraries.service';
import { Router } from '@angular/router';
import { SuccessResponseInterface } from '../../shared/interface/successResponse.interface';
import { GetItinerary } from '../interfaces/get-itinerary.interface';
import { MessageService } from 'primeng/api';
import { CustomErrorResponse, ErrorResponse } from '../../shared/interface/errorResponse.interface';

@Component({
  selector: 'app-itineraries-list',
  templateUrl: './itineraries-list.component.html',
  styleUrl: './itineraries-list.component.css'
})
export class ItinerariesListComponent {

  itineraries: [GetItinerary];
  router = inject(Router);
  itenararyService = inject(ItineraryService);
  messageService = inject(MessageService);
  updated: boolean = false;
  currentItineraries: any;

  ngOnInit(){
    this.itenararyService.getItinerary().subscribe({
      next: (data: SuccessResponseInterface<[GetItinerary]>) => {
        this.itineraries = data.data;
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

  update(itineraries){
    this.updated = true;
    this.currentItineraries = itineraries;
  }
}
