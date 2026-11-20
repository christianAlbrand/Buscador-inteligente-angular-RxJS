import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductStore } from '../../services/product-store';

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './product-form.html',
})
export class ProductForm {
  private store = inject(ProductStore);
  private fb = inject(FormBuilder);

  categories$ = this.store.categories$;

  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    category: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(0.01)]],
    description: ['', [Validators.required, Validators.minLength(5)]],
    image: [''],
  });

  submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.store.add(this.form.getRawValue());
    this.form.reset({ name: '', category: '', price: 0, description: '', image: '' });
  }

  invalid(c: 'name' | 'category' | 'price' | 'description'): boolean {
    const ctrl = this.form.controls[c];
    return ctrl.invalid && ctrl.touched;
  }
}