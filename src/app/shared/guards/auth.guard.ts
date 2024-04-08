import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const authGuard: CanActivateFn = (route, state) => {
    const TOKEN = sessionStorage.getItem('access_token')
    const ROUTER = inject(Router)
    if(TOKEN !== ''){
        return true;
    }
    else{
        ROUTER.navigate(['/login']);
        return false;
    }
}