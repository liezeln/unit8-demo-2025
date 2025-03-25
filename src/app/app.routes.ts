import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListPagedComponent } from './product-list-paged/product-list-paged.component';

export const routes: Routes = [
    { path: '', component: ProductListComponent },
    { path: 'paged', component: ProductListPagedComponent},
    { path: 'product/:id', component: ProductDetailComponent },
    { path: '**', redirectTo: '' }
];
