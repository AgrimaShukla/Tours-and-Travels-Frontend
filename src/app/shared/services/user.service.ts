import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable(
    {providedIn: 'root'}
)
export class UserService{
    isLoggedIn = new BehaviorSubject<Boolean>(false);
    constructor(private http: HttpClient){}

    getRole(){
       return this.http.get('http://localhost:5000/v1/user')
        
    }


}