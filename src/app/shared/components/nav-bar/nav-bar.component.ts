import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import { UserService } from '../../services/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  authService = inject(AuthService);
  items = []
  role: string;
  userService = inject(UserService);
  location = inject(Location)
  isLoggedIn: boolean = false;

  ngOnInit(){

      this.role = JSON.parse(sessionStorage.getItem('userData')).role;
      this.updateMenu();
  }

    updateMenu(){
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
        label: 'Post Reviews',
        visible: this.role === 'user',
        routerLink: 'reviews/booking'
      },
      {
        label: 'Profile',
        icon: 'pi pi-fw pi-user',
        routerLink: 'profile'
      },
      ]
    }

    logoutUser(){
      this.authService.logout();
      this.userService.isLoggedIn.next(false);
    }
}

