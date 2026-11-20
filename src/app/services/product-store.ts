import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { Product, SortOrder } from '../models/product';
import { PRODUCTS } from '../models/products.data';

@Injectable({ providedIn: 'root' })
export class ProductStore {
  // Estado
  private productsSubject = new BehaviorSubject<Product[]>(PRODUCTS);
  private searchSubject = new BehaviorSubject<string>('');
  private categorySubject = new BehaviorSubject<string>('');
  private sortSubject = new BehaviorSubject<SortOrder>('none');

  // Flujos públicos
  readonly products$ = this.productsSubject.asObservable();

  readonly categories$ = this.products$.pipe(
    map(ps => [...new Set(ps.map(p => p.category))].sort())
  );

  // combineLatest: colección + búsqueda + categoría + orden
  readonly filteredProducts$ = combineLatest([
    this.products$,
    this.searchSubject,
    this.categorySubject,
    this.sortSubject,
  ]).pipe(
    map(([products, search, category, sort]) => {
      const term = search.trim().toLowerCase();
      const result = products.filter(p =>
        (!term || p.name.toLowerCase().includes(term)) &&
        (!category || p.category === category)
      );
      if (sort === 'asc') result.sort((a, b) => a.price - b.price);
      if (sort === 'desc') result.sort((a, b) => b.price - a.price);
      return result;
    })
  );

  // Estadísticas: se recalculan cuando cambia la colección
  readonly stats$ = this.products$.pipe(
    map(ps => {
      const prices = ps.map(p => p.price);
      return {
        total: ps.length,
        avg: ps.length ? prices.reduce((a, b) => a + b, 0) / ps.length : 0,
        min: ps.length ? Math.min(...prices) : 0,
        max: ps.length ? Math.max(...prices) : 0,
      };
    })
  );

  // Acciones
  add(data: Omit<Product, 'id'>): void {
    const current = this.productsSubject.value;
    const id = Math.max(0, ...current.map(p => p.id)) + 1;
    const image = data.image.trim() ||
      `https://picsum.photos/seed/${encodeURIComponent(data.name)}/400/300`;
    this.productsSubject.next([...current, { ...data, id, image }]);
  }

  remove(id: number): void {
    this.productsSubject.next(this.productsSubject.value.filter(p => p.id !== id));
  }

  setSearch(v: string): void { this.searchSubject.next(v); }
  setCategory(v: string): void { this.categorySubject.next(v); }
  setSort(v: SortOrder): void { this.sortSubject.next(v); }
}