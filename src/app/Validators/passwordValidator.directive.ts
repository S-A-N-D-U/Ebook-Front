import { FormGroup, ValidatorFn} from '@angular/forms'; //imports



export function passwordMatchValidator(form: FormGroup): ValidatorFn {
    const password = form.controls['password'].value;
    const password_confirm = form.controls['password_confirm'].value;
    if (!password || !password_confirm) {
       return null;
    }
    return (password === password_confirm) ? null : {mismatch: true};
 }