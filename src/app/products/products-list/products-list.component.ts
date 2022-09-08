import { ProductService } from "./../product.service";
import { Product } from "./../product";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.scss"],
})
export class ProductsListComponent implements OnInit {
  constructor(private productService: ProductService) {}

  public products: Array<Product> = new Array<Product>();

  ngOnInit(): void {
    this.productService.GetProducts().subscribe({
      next: (products) => {
        this.products = products;
        console.log(products);
      },
      error: (error) => console.log(error),
    });
  }
}
