import { RouterModule, Routes } from "@angular/router";
import { BookingListComponent } from "./bookings-active/booking-list.component";
import { UpdateBookingsComponent } from "./bookings-active/update-bookings/update-bookings.component";
import { AddBookingsComponent } from "./add-bookings/add-bookings.component";
import { NgModule } from "@angular/core";
import { GetBookingsComponent } from "./get-bookings/get-bookings.component";

const routes: Routes = [
    {path: '', component: GetBookingsComponent},
    {path: 'new', component: AddBookingsComponent},
    {path: 'active', component: BookingListComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookingsRoutingModule{

}