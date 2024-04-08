import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const UserGuard: CanActivateFn = (route, state) => {
    const ROLE = JSON.parse(sessionStorage.getItem('userData')).role;
    const ROUTER = inject(Router)
    console.log(ROLE)
    if(ROLE === 'user'){
        return true;
    }
    else{
        ROUTER.navigate(['/login']);
        return false;
    }
}