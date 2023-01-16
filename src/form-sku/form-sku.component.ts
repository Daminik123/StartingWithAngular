import { 
    Component,
    OnInit,
} from "@angular/core";

@Component({
    selector: 'form-sku',
    templateUrl: 'form-sku.component.html'
})

export class FormSkuComponent implements OnInit{
    ngOnInit(): void {
        
    }

    onSubmit(form: any): void {
        console.log('you submitted value:', form);
    }
}