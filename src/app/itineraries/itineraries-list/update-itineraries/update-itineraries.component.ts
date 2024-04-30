import { Component, Inject, Input, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItineraryService } from '../../itineraries.service';
import { SuccessResponseInterface } from '../../../shared/interface/successResponse.interface';
import { MessageService } from 'primeng/api';
import { CustomErrorResponse, ErrorResponse } from '../../../shared/interface/errorResponse.interface';

@Component({
  selector: 'app-update-itineraries',
  templateUrl: './update-itineraries.component.html',
  styleUrl: './update-itineraries.component.css'
})
export class UpdateItinerariesComponent {

  itineraryForm: FormGroup;
  @Input() itinerary: any;
  itineraryService = inject(ItineraryService);
  messageService = inject(MessageService);
  visible: boolean = true;

  ngOnInit(){
    this.itineraryForm = new FormGroup({
      'day': new FormControl(null, [Validators.required]),
      'city': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required])
    });

    this.itineraryForm.setValue({
      city: this.itinerary.city,
      day: this.itinerary.day,
      description: this.itinerary.description
    })
  }

  onSubmit(form){
    const city = form.value.city;
    const description = form.value.description;
    const day = form.value.day;
    const itinerary_id = this.itinerary.itinerary_id;
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
    this.visible = false;
  }

  onClose(){
    this.visible = false;
  }
}
