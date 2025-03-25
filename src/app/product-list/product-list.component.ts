import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productService = inject(ProductService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  products = this.productService.productsSignal;
  category = signal<string | null>(this.route.snapshot.queryParamMap.get('category'));

  filterByCategory(category: string | null) {
    this.category.set(category);
    this.router.navigate([], { queryParams: { category: category || null } });
    }

}
