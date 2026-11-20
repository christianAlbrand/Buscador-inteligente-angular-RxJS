import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';
import { Statistics } from './components/statistics/statistics';
import { ProductForm } from './components/product-form/product-form';
import { ProductList } from './components/product-list/product-list';
import { ProductSearchComponent } from './product-search/product-search';

@Component({
  selector: 'app-root',
  imports: [Header, Sidebar, Statistics, ProductForm, ProductSearchComponent, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  menuOpen = false;
}