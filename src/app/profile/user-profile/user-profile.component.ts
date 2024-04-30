import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserProfile } from './user-profile.service';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';
import { SuccessResponseInterface } from '../../shared/interface/successResponse.interface';
import { UserInterface } from './interfaces/user.interface';
import { MessageService } from 'primeng/api';
import { CustomErrorResponse, ErrorResponse } from '../../shared/interface/errorResponse.interface';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  userForm: FormGroup;
  userData: UserInterface;
  userId: string;
  profileService = inject(UserProfile);
  route = inject(Router);
  messageService = inject(MessageService);
  userService = inject(UserService);
  
  ngOnInit(){
    this.userForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'mobileNumber': new FormControl(null, [Validators.required]),
      'gender': new FormControl(null, [Validators.required]),
      'age': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required])
    });

    this.userData = JSON.parse(sessionStorage.getItem("userData"));

    this.userForm.setValue({
      name: this.userData.name,
      mobileNumber: this.userData.mobile_number,
      gender: this.userData.gender,
      age: this.userData.age,
      email: this.userData.email
    })
  }

  updateUser(form){
    this.userId = JSON.parse(sessionStorage.getItem('userData')).customer_id;
    this.profileService.updateUser(form.value.name, form.value.mobileNumber, form.value.gender, form.value.age, form.value.email, this.userId).subscribe({
      next: (data: SuccessResponseInterface<null>) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: data.message
        });
      },
      error: (error: ErrorResponse<CustomErrorResponse>) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: error.error.description
        });
      }
    });
    this.userService.getUserProfile().subscribe({
      next: (data: SuccessResponseInterface<UserInterface>) =>{
        sessionStorage.setItem('userData', JSON.stringify(data.data));
        this.route.navigate['profile'];
      },
      error: (error: ErrorResponse<CustomErrorResponse>) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: error.error.description,
        });
      }
    })
    
  }

}
