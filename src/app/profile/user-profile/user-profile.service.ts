import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserProfile{

    http = inject(HttpClient)
    updateUser(name,mobileNumber,gender, age, email, id){
        return this.http.put(`http://localhost:5000/v1/user/${id}`,{
            name: name,
            mobile_number: mobileNumber,
            gender: gender,
            age: age,
            email: email
        })
    }
}