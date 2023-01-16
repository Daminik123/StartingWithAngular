import { 
    Component, 
    OnInit, 
} from "@angular/core";

import {
    FormBuilder,
    FormGroup,
    Validators,
} from "@angular/forms"

@Component({
    selector: 'form-sku-b',
    templateUrl: 'form-sku-b.component.html',
    styles: ['.ui-error-message { color: red; }']
})

export class FormSkuBComponent implements OnInit{
    myForm: FormGroup;

    constructor(fb: FormBuilder){
        this.myForm = fb.group({
            'sku': ['123', Validators.required]
        });
    }

    ngOnInit(): void {
        
    }

    onSubmit(value: string): void{
        console.log('you submitted value: ', value);
    }
}