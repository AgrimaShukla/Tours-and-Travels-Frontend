import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  http = inject(HttpClient);
  
  getReview(package_id){
    console.log(package_id)
    return this.http.get(`http://localhost:5000/v1/package/${package_id}/reviews`)
  }

  getBookings(){
    return this.http.get(`http://localhost:5000/v1/booking/reviews`)
  }

  addReview(package_id, booking_id, name, comment){
    return this.http.post(`http://localhost:5000/v1/package/${package_id}/reviews`, {
      "booking_id": booking_id,
      "name": name,
      "comment": comment
    })
  }
}
