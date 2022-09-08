import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-features",
  templateUrl: "./features.component.html",
  styleUrls: ["./features.component.scss"],
})
export class FeaturesComponent implements OnInit {
  public contadorClicks: number = 0;
  public nome: string = "";
  public cadastroForm!: FormGroup;

  AdicionarClick() {
    this.contadorClicks++;
  }

  ZerarClicks() {
    this.contadorClicks = 0;
  }

  AlterarNome(event: any) {
    this.nome = event.target.value;
  }

  ngOnInit(): void {
    this.cadastroForm = new FormGroup({
      nome_completo: new FormControl(""),
      email: new FormControl(""),
      senha: new FormControl(""),
      repetir_senha: new FormControl(""),
    });
  }

  cadastrarUsuario() {
    let x = this.cadastroForm.value;
    console.log(x);
  }
}
