import { Component, inject } from '@angular/core';
import { ItineraryService } from '../itineraries.service';
import { Router } from '@angular/router';
import { SuccessResponseInterface } from '../../shared/interface/successResponse.interface';
import { GetItinerary } from '../interfaces/get-itinerary.interface';
import { MessageService } from 'primeng/api';
import { CustomErrorResponse, ErrorResponse } from '../../shared/interface/errorResponse.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  updateDialog: boolean = false;
  currentItineraries: any;
  display: boolean = true;
  itineraryForm: FormGroup;
  itineraryService = inject(ItineraryService);

  ngOnInit(){
    this.itenararyService.getItinerary().subscribe({
      next: (data: SuccessResponseInterface<[GetItinerary]>) => {
        this.itineraries = data.data;
      }, 
      error: (error: ErrorResponse<CustomErrorResponse>) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: error.error.description,
        });
      }
    })

    this.itineraryForm = new FormGroup({
      'day': new FormControl(null, [Validators.required]),
      'city': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required])
    });
  }

  update(itineraries){

    this.updateDialog = true;
    this.display = false;
    this.itineraryForm.setValue({
      city: this.currentItineraries.city,
      day: this.currentItineraries.day,
      description: this.currentItineraries.description
    })
    this.currentItineraries = itineraries;
  }

  onSubmit(form){
    const city = form.value.city;
    const description = form.value.description;
    const day = form.value.day;
    const itinerary_id = this.currentItineraries.itinerary_id;
    this.itineraryService.updateItinerary(city, day, description, itinerary_id).subscribe({
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
    });
    this.display = true;
    this.updateDialog = false;
  }

  onClose(){
    this.display = true;
    this.updateDialog = false;
  }
}
