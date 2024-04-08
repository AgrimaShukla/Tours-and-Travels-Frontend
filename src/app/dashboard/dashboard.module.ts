import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard-display/dashboard.component";
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { TourListComponent } from "./dashboard-display/tours/tour-list/tour-list.component";
import { ToursComponent } from "./dashboard-display/tours/tours.component";
import { DashBoardRoutingModule } from "./dashboard-router-module";

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
    ReactiveFormsModule,
    DashBoardRoutingModule
    ]
})
export class DashboardModule{

}