import { Component, Input, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReviewService } from '../../review.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrl: './create-review.component.css'
})
export class CreateReviewComponent implements OnInit{

  @Input() booking;
  reviewForm: FormGroup;
  reviewService = inject(ReviewService);
  messageService = inject(MessageService);
  visible: boolean = true;

  ngOnInit(){
    console.log(this.booking)
    this.reviewForm = new FormGroup({
      "name": new FormControl(null, [Validators.required]),
      "comment": new FormControl(null, [Validators.required, Validators.pattern('^([A-Za-z]{2,100}\s*)+')])
    })
  }

  onSubmit(form){
    const name = form.value.name;
    const comment = form.value.comment;
    
    this.reviewService.addReview(this.booking.packageId, this.booking.bookingId, name, comment).subscribe({
      next: (data: any) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: data.message
        })
      }
    })
    this.visible = false;
  }

  onClose(){
    this.visible = false;
  }
}
