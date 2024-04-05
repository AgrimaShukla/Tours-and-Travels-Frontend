import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPackageComponent } from './add-package/add-package.component';
import { UpdatePackageComponent } from './package-list/update-package/update-package.component';
import { TableModule } from 'primeng/table';
import { PackageListComponent } from './package-list/package-list.component';
import { PackageRoutingModule } from './package-routing.module';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [
    AddPackageComponent,
    UpdatePackageComponent,
    PackageListComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    PackageRoutingModule,
    DialogModule,
    DropdownModule,
    CardModule,
    InputTextModule, 
    ButtonModule,
    ReactiveFormsModule,
    RadioButtonModule,
    TagModule
  ]
})
export class PackageModule { }
