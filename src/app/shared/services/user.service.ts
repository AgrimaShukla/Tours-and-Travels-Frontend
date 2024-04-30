import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";


@Injectable(
    {providedIn: 'root'}
)
export class UserService{
    isLoggedIn = new BehaviorSubject<Boolean>(false);
    packageId = new Subject();
    constructor(private http: HttpClient){}

    getUserProfile(){
       return this.http.get('http://localhost:5000/v1/user')    
    }

    
}