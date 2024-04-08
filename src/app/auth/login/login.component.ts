import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SuccessResponseInterface } from '../../shared/interface/successResponse.interface';
import { LoginInterface } from '../interfaces/login.interface';
import { UserInterface } from '../../profile/user-profile/interfaces/user.interface';
import { CustomErrorResponse, ErrorResponse } from '../../shared/interface/errorResponse.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  authService = inject(AuthService);
  userService = inject(UserService);
  router = inject(Router);
  messageService = inject(MessageService);
  loginForm: FormGroup;
  isLoginMode: boolean = true;
  role: string;


  ngOnInit(){
    this.loginForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.pattern('[A-Za-z0-9._]{2,30}')]),
      'password': new FormControl(null, [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[@#$%&]).{8,}$')])
    });
  }

  onSubmit(form){
    const username = form.value.username;
    const password = form.value.password;
    
    this.authService.login(username, password).subscribe({
      next: (result: SuccessResponseInterface<[LoginInterface]>) => {
        sessionStorage.setItem('accessToken', result.data[0].access_token)
        sessionStorage.setItem('refreshToken', result.data[0].refresh_token)
        this.userService.isLoggedIn.next(true);
        this.messageService.add({
          severity: 'success',
          summary: 'Sucess',
          detail: result.message,
        });
      },
      error: (error: ErrorResponse<CustomErrorResponse>) =>{
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: error.error.description,
        });
      }
    });
   
    if(sessionStorage.getItem('accessToken')){
      this.userService.getRole().subscribe({
        next: (userData: SuccessResponseInterface<UserInterface>) => {
          console.log(userData)
          sessionStorage.setItem('userData', JSON.stringify(userData.data))
          // this.userService.user.next(userData.data);
          this.role = JSON.parse(sessionStorage.getItem('userData')).role;
          console.log(this.role)
          if(this.role == 'admin'){
            this.router.navigate(['/packages'])
          }
          else if(this.role == 'user'){
            this.router.navigate(['/dashboard'])
          }
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
}

