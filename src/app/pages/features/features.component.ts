import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-features",
  templateUrl: "./features.component.html",
  styleUrls: ["./features.component.scss"],
})
export class FeaturesComponent {
  public contadorClicks: number = 0;

  AdicionarClick() {
    this.contadorClicks++;
  }

  ZerarClicks() {
    this.contadorClicks = 0;
  }
}
