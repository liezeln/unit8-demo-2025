import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Laptop', category: 'electronics', price: 999 },
    { id: 2, name: 'Headphones', category: 'electronics', price: 99 },
    { id: 3, name: 'Book', category: 'books', price: 19 },
    { id: 4, name: 'Chair', category: 'furniture', price: 49 },
    { id: 5, name: 'Desk', category: 'furniture', price: 149 },
    { id: 6, name: 'Tablet', category: 'electronics', price: 299 }
    ];
    
    productsSignal = signal<Product[]>(this.products);


    getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
    }
}
