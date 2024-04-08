import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const AdminGuard: CanActivateFn = (route, state) => {
    const ROLE = JSON.parse(sessionStorage.getItem('userData')).role;
    const ROUTER = inject(Router)
    if(ROLE === 'admin'){
        return true;
    }
    else{
        ROUTER.navigate(['/login']);
        return false;
    }
}