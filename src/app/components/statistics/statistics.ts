import { Component, inject } from '@angular/core';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { ProductStore } from '../../services/product-store';

@Component({
  selector: 'app-statistics',
  imports: [AsyncPipe, CurrencyPipe],
  templateUrl: './statistics.html',
  styleUrl: './statistics.css',
})
export class Statistics {
  stats$ = inject(ProductStore).stats$;
}