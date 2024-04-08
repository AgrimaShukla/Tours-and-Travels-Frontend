import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { SuccessResponseInterface } from '../../shared/interface/successResponse.interface';
import { SignupInterface } from '../interfaces/signup.interface';
import { CustomErrorResponse, ErrorResponse } from '../../shared/interface/errorResponse.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signUpForm: FormGroup;
  genders: string[];
  messageService: any;

  constructor(private authService: AuthService, private router: Router){}
  ngOnInit(){
    this.genders =  ['male', 'female', 'other'];
    this.signUpForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.pattern('[A-Za-z0-9._]{2,30}')]),
      'password': new FormControl(null, [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[@#$%&]).{8,}$')]),
      'name': new FormControl(null, [Validators.required, Validators.pattern('^([A-Za-z]{2,25}\s*)+')]),
      'mobile_number': new FormControl(null, [Validators.required, Validators.pattern('[6-9][0-9]{9}')]),
      'gender': new FormControl(null, [Validators.required]),
      'age': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required])
    });
  }

  onSubmit(form){
    const username = form.value.username;
    const password = form.value.password;
    const name = form.value.name;
    const mobile_number = form.value.mobile_number;
    const gender = form.value.gender;
    const age = form.value.age;
    const email = form.value.email;
    this.authService.signUp(username, password, name, mobile_number, gender, age, email).subscribe({
      next: (response: SuccessResponseInterface<[SignupInterface]>) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Sucess',
          detail: response.message,
        });
        this.router.navigate(['login'])
      },
      error: (error: ErrorResponse<CustomErrorResponse>) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: error.error.description,
        });
      }
    });

  }
}
