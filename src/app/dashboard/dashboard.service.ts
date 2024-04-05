import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DashboardService{
    http = inject(HttpClient);
    
    getPackageType(){
        return this.http.get('http://localhost:5000/v1/package_type');
    }

    getPackages(packageName){
        return this.http.get(`http://localhost:5000/v1/package_type/${packageName}`);
    }

    getItineraries(packageName, category, duration){
        const newDuration = duration.replace(/ /g, "-")
        console.log(newDuration)
        let queryParams = new HttpParams();
        queryParams.set('package_name', packageName);
        queryParams.set('duration', newDuration);
        queryParams.set('category', category)
        return this.http.get(`http://localhost:5000/v1/itineraries?destination=${packageName}&category=${category}&days_night=${duration}`)
    }
}