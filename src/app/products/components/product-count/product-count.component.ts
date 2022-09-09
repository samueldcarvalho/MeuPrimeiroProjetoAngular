import { Product } from "./../../product";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-product-count",
  templateUrl: "./product-count.component.html",
  styleUrls: ["./product-count.component.scss"],
})
export class ProductCountComponent {
  @Input()
  public products: Product[] = [];

  contarEmEstoque(): number {
    if (!this.products) return 0;

    return this.products.filter((product: Product) => product.stock > 0).length;
  }
}
