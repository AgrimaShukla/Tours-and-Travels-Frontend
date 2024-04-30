import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { UserProfileComponent } from "./profile/user-profile/user-profile.component";
import { authGuard } from "./shared/guards/auth.guard";
import { UserGuard } from "./shared/guards/user-role.guard";
import { AdminGuard } from "./shared/guards/admin-role.guard";


const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'signup',
        component: SignupComponent
    },
    {
        path:'bookings',
        loadChildren: () => import('./bookings/bookings.module').then(mod => mod.BookingsModule),
        canActivate: [authGuard, UserGuard]
    },
    {
        path:'packages',
        loadChildren: () => import('./package/package.module').then(mod => mod.PackageModule),
        canActivate: [authGuard, AdminGuard]
    },
    {
        path:'profile',
        component: UserProfileComponent,
        canActivate: [authGuard]
    },
    {
        path:'itineraries',
        loadChildren: () => import('./itineraries/itineraries.module').then(mod => mod.ItinerariesModule),
        canActivate: [authGuard, AdminGuard]
    },
    {
        path:'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule),
        canActivate: [authGuard, UserGuard]
    },
    {
        path: 'reviews',
        loadChildren: () => import('./review/review.module').then(mod => mod.ReviewModule),
        canActivate: [authGuard, UserGuard]
    }
    
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}