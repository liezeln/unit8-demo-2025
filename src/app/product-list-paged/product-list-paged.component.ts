import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ProductService } from '../service/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list-paged',
  standalone: true,
  imports: [RouterLink, PaginationModule, FormsModule],
  templateUrl: './product-list-paged.component.html',
  styleUrl: './product-list-paged.component.css'
})
export class ProductListPagedComponent {
  productService = inject(ProductService);
  products = this.productService.productsSignal;
  pageSize = 2;
  currentPage = 1;
  paginatedProducts: any[] = []; 

  constructor() {
    // Initialize paginatedProducts on component load
    this.paginatedProducts = this.getPaginatedProducts();
  }

  // Method to calculate paginated products
  getPaginatedProducts() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.products().slice(start, end);
  }

  onPageChange(event: any) {
    this.currentPage = event.page;
    // Update paginatedProducts when page changes
    this.paginatedProducts = this.getPaginatedProducts(); 
  }
}