import { Component, Input, inject } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { SuccessResponseInterface } from '../../../shared/interface/successResponse.interface';
import { GetTour } from '../../interfaces/get-tours.interface';
import { MessageService } from 'primeng/api';
import { CustomErrorResponse, ErrorResponse } from '../../../shared/interface/errorResponse.interface';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css'
})
export class ToursComponent {

  dashboardService = inject(DashboardService)
  @Input() packageValue: any;
  packages: [GetTour];
  messageService = inject(MessageService);
  status: boolean = false;
  display: boolean = true;
  packageItems = {}
  
  ngOnInit(){
    console.log((this.packageValue))
    this.dashboardService.getPackages(this.packageValue).subscribe({
      next: (data: SuccessResponseInterface<[GetTour]>) => {
        this.packages = data.data;
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: data.message
        });
      },
      error: (error: ErrorResponse<CustomErrorResponse>) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: error.error.description,
        });
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
  }
}
