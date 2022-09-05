import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IProduct } from "./product";
import { Observable } from "rxjs";

@Injectable()
export class ProductService {
  constructor(private client: HttpClient) {}

  BaseURLService: string = "http://localhost:3000/";

  GetProducts(): Observable<IProduct[]> {
    return this.client.get<IProduct[]>(this.BaseURLService + "produtos");
  }
}
