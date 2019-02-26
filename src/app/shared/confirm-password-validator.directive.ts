import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appConfirmPasswordValidator]',
    providers: [{
        provide:NG_VALIDATORS,
        useExisting: ConfirmPasswaordValidatorDirective,
        multi: true
    }]
    
})
export class ConfirmPasswaordValidatorDirective implements Validator{

    @Input() appConfirmPasswordValidator: string;

    validate(control :AbstractControl): {[key: string]: any} | null
     {
        const compare = control.parent.get(this.appConfirmPasswordValidator);
        if(compare && compare.value !== control.value)
        {
            return { 'notEqual' : true };   
        }
        return null;
    }
}