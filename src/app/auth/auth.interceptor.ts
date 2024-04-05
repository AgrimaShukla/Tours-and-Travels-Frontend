import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
    
    intercept(request: HttpRequest<any>, next: HttpHandler){


    if(request.url.includes('login') && request.url.includes('signup')){
        return next.handle(request)
    }
        const accessToken = sessionStorage.getItem('accessToken');
        const authHeader = request.clone({
        headers: request.headers.append('Authorization', `Bearer ${accessToken}`),
      });
      
      return next.handle(authHeader)
    }
}