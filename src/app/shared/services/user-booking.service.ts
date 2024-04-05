import { Injectable } from "@angular/core";
import { BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserBookingService{
    bookingDetails = new BehaviorSubject<any>(null);
}