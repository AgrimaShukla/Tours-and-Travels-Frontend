import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  authService = inject(AuthService);
  items = []
  role: string;

  ngOnInit(){
      this.role = JSON.parse(sessionStorage.getItem('userData')).role;
      this.items = [
        {
          label: 'Profile',
          icon: 'pi pi-fw pi-user',
          routerLink: 'profile'
        },
        {
          label: 'Packages',
          visible: this.role === 'admin',
          items: [{
            label: 'Get and Update packages',
            routerLink: 'packages'
          },
        {
          label: 'Add packages',
          routerLink: 'packages/new'
        }]
        },
        {
          label: 'Itineraries',
          visible: this.role === 'admin',
          items: [{
            label: 'Get and Update Itineraries',
            routerLink: 'itineraries'
          },
        {
          label: 'Add Itineraries',
          routerLink: 'itineraries/new'
        }]
        },
        {
          label: 'Home',
          routerLink: 'dashboard'
        },
        {
          label: 'Bookings',
          visible: this.role === 'user',
          routerLink: 'bookings'
        }
      ]
    }

    logoutUser(){
      this.authService.logout()
    }
}

