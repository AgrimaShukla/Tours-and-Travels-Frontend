import { Component, inject } from '@angular/core';
import { ItineraryService } from '../itineraries.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-itineraries-list',
  templateUrl: './itineraries-list.component.html',
  styleUrl: './itineraries-list.component.css'
})
export class ItinerariesListComponent {
  itineraries: [];
  router = inject(Router)
  itenararyService = inject(ItineraryService)
  updated: boolean = false;
  currentItineraries: any;

  ngOnInit(){

    this.itenararyService.getItinerary().subscribe({
      next: (data: any) => {
        this.itineraries = data.data;
      }
    })
  }

  update(itineraries){
    this.updated = true;
    this.currentItineraries = itineraries;
  }
}
