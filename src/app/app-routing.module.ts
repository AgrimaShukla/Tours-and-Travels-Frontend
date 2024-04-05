import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { UserProfileComponent } from "./profile/user-profile/user-profile.component";
import { DashboardComponent } from "./dashboard/dashboard.component";


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
        loadChildren: () => import('./bookings/bookings.module').then(mod => mod.BookingsModule)
    },
    {
        path:'packages',
        loadChildren: () => import('./package/package.module').then(mod => mod.PackageModule)
    },
    {
        path:'profile',
        component: UserProfileComponent
    },
    {
        path:'itineraries',
        loadChildren: () => import('./itineraries/itineraries.module').then(mod => mod.ItinerariesModule)
    },
    {
        path:'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule)
    }
    
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}