import { RouterModule, Routes } from "@angular/router";
import { ItinerariesListComponent } from "./itineraries-list/itineraries-list.component";
import { AddItinerariesComponent } from "./add-itineraries/add-itineraries.component";
import { UpdateItinerariesComponent } from "./itineraries-list/update-itineraries/update-itineraries.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {path: '', component: ItinerariesListComponent, children:[
        {path: 'new', component: AddItinerariesComponent},
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ItineraryRoutingModule{
    
}