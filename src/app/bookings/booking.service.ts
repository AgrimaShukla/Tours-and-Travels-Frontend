import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({providedIn: 'root'})
export class BookingService{

    http = inject(HttpClient);

    postBookings(packageId, daysNight, name, mobileNumber, startDate, noOfPeople, email){
        return this.http.post('http://localhost:5000/v1/booking',{
            package_id: packageId,
            duration: daysNight,
            name: name,
            mobile_number: mobileNumber,
            start_date: String(startDate),
            number_of_people: noOfPeople,
            email: email
        })
    }

    getBookings(){
        return this.http.get('http://localhost:5000/v1/booking');
    }

    getActiveBookings(){
        return this.http.get('http://localhost:5000/v1/booking/active');
    }

    updateBookings(booking_id, name, mobileNumber, startDate, noOfPeople, email){
        return this.http.put(`http://localhost:5000/v1/booking/${booking_id}`, {
            name: name,
            mobile_number: mobileNumber,
            start_date: startDate,
            number_of_people: noOfPeople,
            email: email,
        })
    }

    cancelBookings(booking_id){
        return this.http.put(`http://localhost:5000/v1/booking/cancel/${booking_id}`, {})
    }
}