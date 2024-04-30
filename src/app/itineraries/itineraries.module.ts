import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateItinerariesComponent } from './itineraries-list/update-itineraries/update-itineraries.component';
import { ItinerariesListComponent } from './itineraries-list/itineraries-list.component';
import { AddItinerariesComponent } from './add-itineraries/add-itineraries.component';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { ItineraryRoutingModule } from './itineraries-routing.module';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AddItinerariesComponent,
    UpdateItinerariesComponent,
    ItinerariesListComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    DropdownModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    ItineraryRoutingModule,
    TableModule
  ]
})
export class ItinerariesModule { }
