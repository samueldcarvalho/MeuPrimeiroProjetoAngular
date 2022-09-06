import { FeaturesComponent } from "./pages/features/features.component";
import { HomeComponent } from "./pages/home/home.component";
import { Routes } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { ProductsListComponent } from "./products/products-list/products-list.component";

export const rootRouterConfig: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "features", component: FeaturesComponent },
  { path: "products", component: ProductsListComponent },
  { path: "product/:id", component: ProductsListComponent },
  { path: "cart/:id", component: ProductsListComponent },
];
