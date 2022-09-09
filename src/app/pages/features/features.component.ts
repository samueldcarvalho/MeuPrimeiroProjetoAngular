import {
  DisplayMessage,
  GenericFormValidator,
  ValidationMessages,
} from "./../../forms/models/generic-form-validator";
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChildren,
} from "@angular/core";
import {
  FormBuilder,
  FormControlName,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-features",
  templateUrl: "./features.component.html",
  styleUrls: ["./features.component.scss"],
})
export class FeaturesComponent implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[] = [];

  public contadorClicks: number = 0;
  public nome: string = "";
  public cadastroForm!: FormGroup;
  public formResult: string = "";

  validationMessages?: ValidationMessages;
  genericValidator?: GenericFormValidator;
  DisplayMessage: DisplayMessage = {};

  constructor(private fb: FormBuilder) {
    this.validationMessages = {
      nome: {
        required: "O nome é requerido",
        minLength: "O nome precisa de pelo menos 5 caracteres",
        maxLength: "O nome não pode ultrapassar 40 caracteres",
      },
    };

    this.genericValidator = new GenericFormValidator(this.validationMessages);
  }

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      nome_completo: ["", Validators.required],
    });
  }

  ngAfterViewInit(): void {
    throw new Error("Method not implemented.");
  }
  AdicionarClick() {
    this.contadorClicks++;
  }

  ZerarClicks() {
    this.contadorClicks = 0;
  }

  AlterarNome(event: any) {
    this.nome = event.target.value;
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
