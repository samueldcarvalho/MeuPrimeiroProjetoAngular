import { FormGroup, ValidationErrors } from "@angular/forms";

export class GenericFormValidator {
  /**
   *
   */
  constructor(private validationMessages: ValidationMessages) {}

  processarMensagens(container: FormGroup): DisplayMessage {
    let messages: any = {};

    for (let controlKey in container.controls) {
      if (container.controls.hasOwnProperty(controlKey)) {
        let control = container.controls[controlKey];

        if (control instanceof FormGroup) {
          let childMessages = this.processarMensagens(control);
          Object.assign(messages, childMessages);
        } else {
          if (this.validationMessages[controlKey]) {
            messages[controlKey] = "";
            if ((control.dirty || control.touched) && control.errors) {
              Object.keys(control.errors).map((messageKey) => {
                if (this.validationMessages[controlKey][messageKey]) {
                  messages[controlKey] +=
                    this.validationMessages[controlKey][messageKey];
                }
              });
            }
          }
        }
      }
    }

    return messages;
  }
}

export interface DisplayMessage {
  [key: string]: string;
}

export interface ValidationMessages {
  [key: string]: { [key: string]: string };
}
