import { Component, Input, inject } from '@angular/core';
import { PackageService } from '../package.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrl: './package-list.component.css'
})
export class PackageListComponent {

  packages: [];
  currentPackage: string;
  updateClicked: boolean = false;
  activeRoute = inject(ActivatedRoute)
  router = inject(Router)
  packageService = inject(PackageService)

  ngOnInit(){
    this.packageService.getPackages().subscribe({
      next: (data: any) => {
        this.packages = data.data;
      }
    })

   
  }
  update(packages){
    this.updateClicked = true;
    this.currentPackage = packages;
  }
}
