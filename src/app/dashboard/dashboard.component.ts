import { Component, inject } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
    dashboardService = inject(DashboardService)
    packageName: string[];
    currentPackage: string;
    status: boolean = false;
    display: boolean = true
    
    ngOnInit(){
      this.dashboardService.getPackageType().subscribe({
        next: (data: any) => {
          this.packageName = data.data;
        }
      })
    }

    onVisitClick(packageName){
      this.status = true;
      this.display = false;
      this.currentPackage = packageName;
    }
}
