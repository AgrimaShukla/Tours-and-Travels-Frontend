import { Component, inject } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { SuccessResponseInterface } from '../../shared/interface/successResponse.interface';
import { GetPackageType } from '../interfaces/get-package-type.interface';
import { MessageService } from 'primeng/api';
import { CustomErrorResponse, ErrorResponse } from '../../shared/interface/errorResponse.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
    dashboardService = inject(DashboardService);
    messageService = inject(MessageService);
    packageName: [GetPackageType];
    currentPackage: string;
    status: boolean = false;
    display: boolean = true
    
    ngOnInit(){
      this.dashboardService.getPackageType().subscribe({
        next: (data: SuccessResponseInterface<[GetPackageType]>) => {
          this.packageName = data.data;
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

    onVisitClick(packageName){
      this.status = true;
      this.display = false;
      this.currentPackage = packageName;
    }
}
