import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "./product";
import { Observable } from "rxjs";

@Injectable()
export class ProductService {
  constructor(private client: HttpClient) {}

  BaseURLService: string = "http://localhost:3000/";

  GetProducts(): Observable<Product[]> {
    return this.client.get<Product[]>(this.BaseURLService + "products");
  }
}
