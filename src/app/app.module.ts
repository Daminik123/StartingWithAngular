import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormSkuComponent } from '../form-sku/form-sku.component'
import { FormSkuBComponent } from 'src/form-sku-b/form-sku-b.component';
import { 
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    FormSkuComponent,
    FormSkuBComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
