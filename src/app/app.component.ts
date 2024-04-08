import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService]
})
export class AppComponent {
  title = 'tours-and-travels';

  router = inject(Router);
  activeRoute = inject(ActivatedRoute);
  isLogged: boolean = false;
  userService = inject(UserService)
  items: [{}];
  ngOnInit(){
    
    this.userService.isLoggedIn.subscribe({
      next: (value: boolean) => {
        this.isLogged = value;
      }
    })
  }
}
