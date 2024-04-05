import { RouterModule, Routes } from "@angular/router";
import { BookingListComponent } from "./booking-list/booking-list.component";
import { UpdateBookingsComponent } from "./update-bookings/update-bookings.component";
import { AddBookingsComponent } from "./add-bookings/add-bookings.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {path: '', component: BookingListComponent},
    {path: 'new', component: AddBookingsComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookingsRoutingModule{

}