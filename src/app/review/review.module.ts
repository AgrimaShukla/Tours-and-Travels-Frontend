import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewRoutingModule } from './review-routing.module';
import { GetReviewComponent } from './get-review/get-review.component';
import { FieldsetModule } from 'primeng/fieldset';
import { ListForReviewComponent } from './list-for-review/list-for-review.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CreateReviewComponent } from './list-for-review/create-review/create-review.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    GetReviewComponent,
    ListForReviewComponent,
    CreateReviewComponent
  ],
  imports: [
    CommonModule,
    FieldsetModule,
    ReviewRoutingModule,
    TableModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    DialogModule
  ]
})
export class ReviewModule { 

}
