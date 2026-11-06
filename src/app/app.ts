import { Component } from '@angular/core';
import { ProductSearchComponent } from './product-search/product-search';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductSearchComponent],
  template: `<app-product-search />`,
})
export class App {}