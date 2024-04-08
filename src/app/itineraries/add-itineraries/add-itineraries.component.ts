import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItineraryService } from '../itineraries.service';
import { Router } from '@angular/router';
import { SuccessResponseInterface } from '../../shared/interface/successResponse.interface';
import { AddItinerary } from '../interfaces/add-itinerary.interface';
import { MessageService } from 'primeng/api';
import { CustomErrorResponse, ErrorResponse } from '../../shared/interface/errorResponse.interface';

@Component({
  selector: 'app-add-itineraries',
  templateUrl: './add-itineraries.component.html',
  styleUrl: './add-itineraries.component.css'
})
export class AddItinerariesComponent {

  itineraryService = inject(ItineraryService);
  messageService = inject(MessageService);
  itineraryForm: FormGroup;
  visible: boolean = true;
  router = inject(Router)

  ngOnInit(){
    this.itineraryForm = new FormGroup({
    'city': new FormControl(null, [Validators.required, Validators.pattern('^([A-Za-z]{2,25}\s*)+')]),
    'day': new FormControl(null, [Validators.required]),
    'description': new FormControl(null, [Validators.required, Validators.pattern('^([A-Za-z]{2,25}\s*)+')]),
   })
  }

  onSubmit(form){
    const day = form.value.day;
    const city = form.value.city;
    const description = form.value.description;
    this.itineraryService.postItinerary(city, day, description).subscribe({
      next: (data: SuccessResponseInterface<[AddItinerary]>) => {
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
    this.router.navigate(['itineraries']);
  }

}
