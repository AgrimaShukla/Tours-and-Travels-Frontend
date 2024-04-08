import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingListComponent } from './bookings-active/booking-list.component';
import { AddBookingsComponent } from './add-bookings/add-bookings.component';
import { UpdateBookingsComponent } from './bookings-active/update-bookings/update-bookings.component';
import { RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { BookingsRoutingModule } from './bookings-router.module';
import { GetBookingsComponent } from './get-bookings/get-bookings.component';


@NgModule({
  declarations: [
    BookingListComponent,
    AddBookingsComponent,
    UpdateBookingsComponent,
    GetBookingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DialogModule,
    CardModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    ReactiveFormsModule,
    TableModule,
    BookingsRoutingModule
  ]
})
export class BookingsModule { }
