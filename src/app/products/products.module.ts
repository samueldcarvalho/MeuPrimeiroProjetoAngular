import { ProductRoutingModule } from "./product.route";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { ProductCountComponent } from "./components/product-count/product-count.component";

@NgModule({
  declarations: [],
  imports: [ProductRoutingModule, CommonModule, ProductRoutingModule],
})
export class ProductsModule {}
