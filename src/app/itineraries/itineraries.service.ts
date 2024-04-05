import { HttpClient } from "@angular/common/http"
import { Injectable, inject } from "@angular/core"
import { Subject } from "rxjs"


@Injectable({
    providedIn: 'root'
})
export class ItineraryService{
    http = inject(HttpClient);

    getItinerary(){
        return this.http.get('http://localhost:5000/v1/itineraries')
    }

    updateItinerary(city, day, description, itinerary_id){
        return this.http.put(`http://localhost:5000/v1/itineraries/${itinerary_id}`,{
            city: city,
            day: day,
            description: description
        })
    }

    postItinerary(city, day, description){
        return this.http.post(`http://localhost:5000/v1/itineraries`,{
            day: day,
            city: city,
            description: description
        })
    }
}