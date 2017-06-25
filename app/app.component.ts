import { Component } from '@angular/core';
import { ProductListComponent } from './products/product_list.component'

@Component({
    selector: 'bd-app',
    template: `
    <div><h1>{{pageTitle}}</h1>
        <bd-products></bd-products>
    </div>
    `
})

export class AppComponent {
    pageTitle: string = 'Bidhaa Product Management'
 }
