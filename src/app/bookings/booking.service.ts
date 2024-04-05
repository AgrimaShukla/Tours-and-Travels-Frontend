import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({providedIn: 'root'})
export class BookingService{

    http = inject(HttpClient);

    postBookings(packageId, daysNight, name, mobileNumber, startDate, endDate, noOfPeople, email){
        return this.http.post('http://localhost:5000/v1/booking',{
            package_id: packageId,
            days_night: daysNight,
            name: name,
            mobile_number: mobileNumber,
            start_date: String(startDate),
            end_date: String(endDate),
            number_of_people: noOfPeople,
            email: email
        })
    }

    getBookings(){
        return this.http.get('http://localhost:5000/v1/booking');
    }
}