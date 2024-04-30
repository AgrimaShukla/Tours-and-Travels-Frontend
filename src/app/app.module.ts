import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptorService } from './auth/auth.interceptor';
import { UserProfileModule } from './profile/user-profile/user-profile.module';
import { SharedModule } from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { DashboardModule } from './dashboard/dashboard.module';
import { GetReviewComponent } from './review/get-review/get-review.component';
import { CreateReviewComponent } from './review/list-for-review/create-review/create-review.component';
import { ReviewModule } from './review/review.module';

@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    MenubarModule,
    ToastModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    HttpClientModule,
    UserProfileModule,
    DashboardModule,
    ReviewModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
