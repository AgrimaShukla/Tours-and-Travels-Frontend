import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService]
})
export class AppComponent {
  title = 'tours-and-travels';

  status: boolean = false;
  router = inject(Router);
  activeRoute = inject(ActivatedRoute)
  items: [{}];
  ngOnInit(){
    console.log(this.router.url)
    if(!this.router.url.includes('login')){
      this.status = true
    }
  }
}
