import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItineraryService } from '../itineraries.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-itineraries',
  templateUrl: './add-itineraries.component.html',
  styleUrl: './add-itineraries.component.css'
})
export class AddItinerariesComponent {

  itineraryService = inject(ItineraryService);
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
    this.itineraryService.postItinerary(city, day, description).subscribe();
    this.visible = false;
  }

  onClose(){
    this.router.navigate(['itineraries']);
  }

}
