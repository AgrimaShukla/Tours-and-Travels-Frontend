import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "primeng/api";
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from "./user-profile.component";

@NgModule({
    declarations: [
      UserProfileComponent
    ],
    imports:[
      CommonModule,
      CardModule,
      InputTextModule,
      ButtonModule,
      DropdownModule,
      ReactiveFormsModule
    ],
  })
  export class UserProfileModule { }
  