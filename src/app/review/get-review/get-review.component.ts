import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { ReviewService } from '../review.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-review',
  templateUrl: './get-review.component.html',
  styleUrl: './get-review.component.css'
})
export class GetReviewComponent implements OnInit{

  reviews;
  packageID: string;
  userService = inject(UserService);
  reviewService = inject(ReviewService);

  constructor(private router: Router){
    const stateData = this.router.getCurrentNavigation()?.extras.state;
    if(stateData){
      this.packageID = stateData["packageId"]
    }
    else{
      return router.navigate["dashboard"]
    }
  }

  ngOnInit(){
    this.reviewService.getReview(this.packageID).subscribe({
      next: (reviewData: any) => {
        this.reviews = reviewData.data;
      }
    });

  }
}
