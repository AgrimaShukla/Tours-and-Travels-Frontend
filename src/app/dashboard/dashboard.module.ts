import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { TourListComponent } from "./tours/tour-list/tour-list.component";
import { ToursComponent } from "./tours/tours.component";
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        DashboardComponent,
        TourListComponent,
        ToursComponent
    ],
    imports: [ 
    CommonModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    RouterModule,
    DropdownModule,
    ReactiveFormsModule
    ]
})
export class DashboardModule{

}