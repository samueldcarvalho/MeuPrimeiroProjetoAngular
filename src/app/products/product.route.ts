import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductDashboardComponent } from "./product-dashboard/product-dashboard.component";

const productsRouteConfig: Routes = [
  { path: "", component: ProductDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(productsRouteConfig)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
