import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports:[
    CommonModule,
    MenubarModule
  ],
  exports: [
    CommonModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    ReactiveFormsModule,
    MenubarModule,
    NavBarComponent
  ]
})
export class SharedModule { }
