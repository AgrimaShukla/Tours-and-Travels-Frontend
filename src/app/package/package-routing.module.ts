import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PackageListComponent } from "./package-list/package-list.component";
import { UpdatePackageComponent } from "./package-list/update-package/update-package.component";
import { AddPackageComponent } from "./add-package/add-package.component";


const routes: Routes = [
    {path: '', component: PackageListComponent, children:[
        {path: 'new', component: AddPackageComponent},
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PackageRoutingModule{
    
}