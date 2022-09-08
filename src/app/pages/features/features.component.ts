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
  public formResult: string = "";

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
      email: ["", [Validators.required, Validators.email]],
      nome_completo: ["", Validators.required],
      repetir_senha: [""],
      senha: [""],
    });
  }

  cadastrarUsuario() {
    if (this.cadastroForm.dirty && this.cadastroForm.valid) {
      console.log(this.cadastroForm.value);
      this.formResult = JSON.stringify(this.cadastroForm.value);
    }
  }

  retornarErrosFormControl(fieldName: string): boolean {
    return (
      this.cadastroForm.get(fieldName)!.errors != null &&
      (this.cadastroForm.get(fieldName)!.touched ||
        this.cadastroForm.get(fieldName)!.dirty)
    );
  }
}
