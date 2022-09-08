import { CadastrarUsuarioInputModel } from "./models/cadastrar-usuario.inputmodel";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-features",
  templateUrl: "./features.component.html",
  styleUrls: ["./features.component.scss"],
})
export class FeaturesComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

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
    this.cadastroForm = this.fb.group({
      email: ["", Validators.required],
      nome_completo: ["", Validators.required],
      repetir_senha: ["", Validators.required],
      senha: [""],
    });
  }

  cadastrarUsuario() {
    console.log(this.cadastroForm.value);
  }
}
