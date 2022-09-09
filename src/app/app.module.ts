import { rootRouterConfig } from "./app.routes";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./layouts/header/header.component";
import { HomeComponent } from "./pages/home/home.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { AboutComponent } from "./pages/about/about.component";
import { RouterModule } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import { FeaturesComponent } from "./pages/features/features.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductService } from "./products/product.service";
import { ProductsListComponent } from "./products/products-list/products-list.component";
import { HttpClientModule } from "@angular/common/http";
import { CustomFormsModule } from "ng2-validation";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    FeaturesComponent,
    ProductsListComponent,
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
  ],
  providers: [ProductService, { provide: APP_BASE_HREF, useValue: "/" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
