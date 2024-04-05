import { Component, Input, inject } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css'
})
export class ToursComponent {

  dashboardService = inject(DashboardService)
  @Input() packageValue: any;
  packages: any[];
  status: boolean = false;
  display: boolean = true;
  packageItems = {}
  
  ngOnInit(){
    console.log((this.packageValue))
    this.dashboardService.getPackages(this.packageValue).subscribe({

      next: (data: any) => {
        
        this.packages = data.data;
        console.log('hey')
        console.log(data.data)
      }
    })
  }

  onVisitClick(package_name, category, duration, package_id){
    this.status = true;
    this.display = false;
    this.packageItems['package_name'] = package_name;
    this.packageItems['category'] = category;
    this.packageItems['duration'] = duration;
    this.packageItems['packageId'] = package_id;
    console.log(this.packageItems)
    // this.packageValue = this.packageItems;
  }
}
