import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class PackageService{

    http = inject(HttpClient)
    package = new Subject()
    
    getPackages(){
        return this.http.get('http://localhost:5000/v1/packages')
    }

    updatePackages(package_id, packageName, duration, category, price, status){
        console.log(package_id, packageName, duration, category, price, status)
        return this.http.put(`http://localhost:5000/v1/packages/${package_id}`, {
            package_name: packageName,
            duration: duration,
            category: category,
            price: price,
            status: status
        })
    }

    postPackages(packageName, duration, category, price, status){
        return this.http.post('http://localhost:5000/v1/packages', {
            package_name: packageName,
            duration: duration,
            category: category,
            price: price,
            status: status
        })
    }
}