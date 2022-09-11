import { Product } from "./../../product";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"],
})
export class ProductCardComponent implements OnInit {
  @Input()
  product!: Product;

  @Output()
  status: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  emitirEvento() {
    this.status.emit(this.product);
  }

  ngOnInit(): void {}
}
