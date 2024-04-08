import { Component, Input, inject } from '@angular/core';
import { PackageService } from '../package.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SuccessResponseInterface } from '../../shared/interface/successResponse.interface';
import { GetPackage } from '../interfaces/get-package.interface';
import { MessageService } from 'primeng/api';
import { CustomErrorResponse, ErrorResponse } from '../../shared/interface/errorResponse.interface';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrl: './package-list.component.css'
})
export class PackageListComponent {

  packages: [GetPackage];
  currentPackage: GetPackage;
  updateClicked: boolean = false;
  activeRoute = inject(ActivatedRoute);
  router = inject(Router);
  packageService = inject(PackageService);
  messageService = inject(MessageService);

  ngOnInit(){
    this.packageService.getPackages().subscribe({
      next: (data: SuccessResponseInterface<[GetPackage]>) => {
        this.packages = data.data;
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: data.message,
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
  update(packages){
    this.updateClicked = true;
    this.currentPackage = packages;
  }
}
