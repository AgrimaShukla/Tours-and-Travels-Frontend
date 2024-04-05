import { Component, Input, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItineraryService } from '../../itineraries.service';

@Component({
  selector: 'app-update-itineraries',
  templateUrl: './update-itineraries.component.html',
  styleUrl: './update-itineraries.component.css'
})
export class UpdateItinerariesComponent {

  itineraryForm: FormGroup;
  @Input() itinerary: any;
  itineraryService = inject(ItineraryService);
  visible: boolean = true;

  ngOnInit(){
    this.itineraryForm = new FormGroup({
      'day': new FormControl(null, [Validators.required]),
      'city': new FormControl(null, [Validators.required, Validators.pattern('^([A-Za-z]{2,25}\s*)+')]),
      'description': new FormControl(null, [Validators.required, Validators.pattern('^([A-Za-z]{2,25}\s*)+')])
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
    this.itineraryService.updateItinerary(city, day, description, itinerary_id).subscribe();
    this.visible = false;
  }

  onClose(){
    this.visible = false;
  }
}
