import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface User{
    age: string,
    email: string,
    gender: string,
    mobile_number: string,
    name: string,
    role: string
}

@Injectable(
    {providedIn: 'root'}
)
export class UserService{
    user = new BehaviorSubject<User>(null);
    constructor(private http: HttpClient){}

    getRole(){
       return this.http.get('http://localhost:5000/v1/user')
        
    }


}