import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
} from 'rxjs/operators';
import { PriceRange, Product } from '../models/product';
import { PRODUCTS } from '../models/products.data';

interface SearchViewModel {
  items: Product[];
  count: number;
  total: number;
  hasFilters: boolean;
}

@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-search.html',
  styleUrls: ['./product-search.css'],
})
export class ProductSearchComponent {
  readonly products: Product[] = PRODUCTS;

  readonly categories: string[] = [
    'Todas',
    ...Array.from(new Set(this.products.map((p) => p.category))),
  ];

  readonly priceRanges: PriceRange[] = [
    { label: 'Todos los precios', min: 0, max: Infinity },
    { label: 'Menos de $500', min: 0, max: 499.99 },
    { label: '$500 - $1,000', min: 500, max: 1000 },
    { label: '$1,000 - $3,000', min: 1000.01, max: 3000 },
    { label: 'Más de $3,000', min: 3000.01, max: Infinity },
  ];

  readonly categoryIcons: Record<string, string> = {
    Todas: '🛍️',
    Electrónica: '💻',
    Hogar: '🏠',
    Deportes: '⚽',
    Ropa: '👕',
    Libros: '📚',
  };

  readonly searchControl = new FormControl<string>('', { nonNullable: true });
  readonly categoryControl = new FormControl<string>('Todas', { nonNullable: true });
  readonly priceControl = new FormControl<number>(0, { nonNullable: true });
  readonly sortControl = new FormControl<string>('default', { nonNullable: true });

  cartCount = 0;

  readonly vm$: Observable<SearchViewModel>;

  constructor() {
    // debounceTime + map (normaliza) + distinctUntilChanged
    const search$ = this.searchControl.valueChanges.pipe(
      debounceTime(300),
      map((value) => value.trim().toLowerCase()),
      startWith(''),
      distinctUntilChanged()
    );

    const category$ = this.categoryControl.valueChanges.pipe(
      startWith(this.categoryControl.value),
      distinctUntilChanged()
    );

    const priceRange$ = this.priceControl.valueChanges.pipe(
      startWith(this.priceControl.value),
      distinctUntilChanged(),
      map((index) => this.priceRanges[+index] ?? this.priceRanges[0])
    );

    const sort$ = this.sortControl.valueChanges.pipe(
      startWith(this.sortControl.value),
      distinctUntilChanged()
    );

    // Todos los filtros se combinan en un solo flujo
    this.vm$ = combineLatest([search$, category$, priceRange$, sort$]).pipe(
      map(([term, category, range, sort]) => {
        const items = this.products
          .filter(
            (p) =>
              p.name.toLowerCase().includes(term) &&
              (category === 'Todas' || p.category === category) &&
              p.price >= range.min &&
              p.price <= range.max
          )
          .sort((a, b) => {
            switch (sort) {
              case 'price-asc':
                return a.price - b.price;
              case 'price-desc':
                return b.price - a.price;
              case 'name':
                return a.name.localeCompare(b.name);
              default:
                return a.id - b.id;
            }
          });

        return {
          items,
          count: items.length,
          total: this.products.length,
          hasFilters:
            term !== '' || category !== 'Todas' || range !== this.priceRanges[0],
        };
      })
    );
  }

  setCategory(category: string): void {
    this.categoryControl.setValue(category);
  }

  setPrice(index: number): void {
    this.priceControl.setValue(index);
  }

  clearSearch(): void {
    this.searchControl.setValue('');
  }

  resetFilters(): void {
    this.searchControl.setValue('');
    this.categoryControl.setValue('Todas');
    this.priceControl.setValue(0);
    this.sortControl.setValue('default');
  }

  addToCart(): void {
    this.cartCount++;
  }

  trackById(_: number, product: Product): number {
    return product.id;
  }
}