import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class AuthService{
   
    http = inject(HttpClient)
    router = inject(Router)
    loginStatus = false;
    isLoggedIn = new BehaviorSubject<boolean>(false);

    login(username, password){
        return this.http.post('http://localhost:5000/v1/signin', {username: username, password: password})
    }

    signUp(username, password, name, mobile_number, gender, age, email){
        return this.http.post('http://localhost:5000/v1/signup', 
        {
            username: username,
            password: password,
            name: name,
            mobile_number: mobile_number,
            gender: gender,
            age: age, 
            email: email
        })
    }

    logout(){
        return this.http.post('http://localhost:5000/v1/logout',{}).subscribe({
            next: () => {
                sessionStorage.clear()
                this.router.navigate(['login']);
                
            }
    });
    }
    
}