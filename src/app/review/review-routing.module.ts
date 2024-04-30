import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { GetReviewComponent } from "./get-review/get-review.component";
import { ListForReviewComponent } from "./list-for-review/list-for-review.component";


const routes: Routes = [
    {path: '', component: GetReviewComponent},
    {path: 'booking', component: ListForReviewComponent}
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReviewRoutingModule{

}