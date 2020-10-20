import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

@Component({
    templateUrl: 'productEditor.component.html'
})
export class ProductEditorComponent {
    editing = false;
    product: Product = new Product();

    constructor(private productRepo: ProductRepository, private router: Router, activeRoute: ActivatedRoute) {
        this.editing = activeRoute.snapshot.params.mode === 'edit';
        if (this.editing) {
            Object.assign(this.product, productRepo.getProduct(activeRoute.snapshot.params.id));
        }
    }

    save(form: NgForm) {
        this.productRepo.saveProduct(this.product);
        this.router.navigateByUrl('/admin/main/products');
    }
}
