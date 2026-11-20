import { Component, inject } from '@angular/core';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { ProductStore } from '../../services/product-store';

@Component({
  selector: 'app-product-list',
  imports: [AsyncPipe, CurrencyPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  private store = inject(ProductStore);
  products$ = this.store.filteredProducts$;

  delete(id: number): void { this.store.remove(id); }
}