import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { ProductStore } from '../services/product-store';
import { SortOrder } from '../models/product';

@Component({
  selector: 'app-product-search',
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './product-search.html',
  styleUrl: './product-search.css',
})
export class ProductSearchComponent {
  private store = inject(ProductStore);

  categories$ = this.store.categories$;
  search = new FormControl('', { nonNullable: true });
  category = new FormControl('', { nonNullable: true });
  sort = new FormControl<SortOrder>('none', { nonNullable: true });

  constructor() {
    this.search.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged(), takeUntilDestroyed())
      .subscribe(v => this.store.setSearch(v));

    this.category.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe(v => this.store.setCategory(v));

    this.sort.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe(v => this.store.setSort(v));
  }
}