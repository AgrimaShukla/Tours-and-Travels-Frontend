import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserProfile } from './user-profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  userForm: FormGroup;
  userData: any;
  userId: string;
  profileService = inject(UserProfile)
  route = inject(Router)
  ngOnInit(){
    this.userForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'mobileNumber': new FormControl(null, [Validators.required]),
      'gender': new FormControl(null, [Validators.required]),
      'age': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required])
    });
    // console.log(JSON.parse(sessionStorage.getItem('userData')))
    this.userData = JSON.parse(sessionStorage.getItem("userData"));

    this.userForm.setValue({
      name: this.userData.name,
      mobileNumber: this.userData.mobile_number,
      gender: this.userData.gender,
      age: this.userData.age,
      email: this.userData.email
    })
  }

  onSubmit(form){

  }

  updateUser(form){
    // console.log(JSON.parse(sessionStorage.getItem('userData')).customer_id)
    this.userId = JSON.parse(sessionStorage.getItem('userData')).customer_id;
    this.profileService.updateUser(form.value.name, form.value.mobileNumber, form.value.gender, form.value.age, form.value.email, this.userId).subscribe();
    this.profileService.getUser().subscribe({
      next: (data: any) =>{
        console.log(data.data)
        sessionStorage.setItem('userData', JSON.stringify(data.data))
        this.route.navigate['profile']
      }
    })
    
  }

}
