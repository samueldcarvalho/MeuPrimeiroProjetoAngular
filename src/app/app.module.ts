import { ProductCardComponent } from "./products/components/product-card/product-card.component";
import { LayoutModule } from "./layouts/layout.module";
import { AppRoutingModule } from "./app.routes";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { AboutComponent } from "./pages/about/about.component";
import { APP_BASE_HREF } from "@angular/common";
import { FeaturesComponent } from "./pages/features/features.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductService } from "./products/product.service";
import { ProductsListComponent } from "./products/products-list/products-list.component";
import { HttpClientModule } from "@angular/common/http";
import { ProductDashboardComponent } from "./products/product-dashboard/product-dashboard.component";
import { ProductCountComponent } from "./products/components/product-count/product-count.component";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    FeaturesComponent,
    ProductsListComponent,
    ProductDashboardComponent,
    ProductCardComponent,
    ProductCountComponent,
  ],
  imports: [
    LayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [ProductService, { provide: APP_BASE_HREF, useValue: "/" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
