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
          label: 'Home',
          routerLink: 'dashboard',
          visible: this.role === 'user'
        },
        {
          label: 'Home',
          routerLink: 'packages',
          visible: this.role === 'admin'
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
          label: 'Bookings',
          visible: this.role === 'user',
          items: [{
            label: 'All Bookings',
            routerLink: 'bookings'
          },
          {
            label: 'Update or Cancel bookings',
            routerLink: 'bookings/active'
          },
        ]
      },
      {
        label: 'Profile',
        icon: 'pi pi-fw pi-user',
        routerLink: 'profile'
      },
      ]
    }

    logoutUser(){
      this.authService.logout()
    }
}

