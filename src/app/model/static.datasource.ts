import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable, from } from 'rxjs';
import { Order } from './order.model';

@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, 'Brachypelma auratum', 'Brachypelma',
        'Product Brachypelma auratum (Category Brachypelma)', 100),
        new Product(2, 'Brachypelma baumgarteni', 'Brachypelma',
        'Product Brachypelma baumgarteni (Category Brachypelma)', 100),
        new Product(3, 'Brachypelma boehmei', 'Brachypelma',
        'Product Brachypelma boehmei (Category Brachypelma)', 100),
        new Product(4, 'Brachypelma emilia', 'Brachypelma',
        'Product Brachypelma emilia (Category Brachypelma)', 100),
        new Product(5, 'Brachypelma hamorii', 'Brachypelma',
        'Product Brachypelma hamorii (Category Brachypelma)', 100),
        new Product(5, 'Brachypelma kahlenbergi', 'Brachypelma',
        'Product Brachypelma kahlenbergi (Category Brachypelma)', 100),
        new Product(6, 'Product Grammostola pulchra - Brazilian Black',
        'Grammostola', 'Product Grammostola pulchra (Category Grammostola)', 100),
        new Product(7, 'Product Grammostola rosea - Chilean Rose', 'Grammostola',
        'Product Grammostola rosea (Category Grammostola)', 100),
        new Product(8, 'Product Grammostola rosea red', 'Grammostola',
        'Product Grammostola rosea red (Category Grammostola)', 100),
        new Product(9, 'Product Avicularia avicularia', 'Avicularia',
        'Product Avicularia avicularia (Category Avicularia)', 100),
        new Product(10, 'Product Avicularia juruensis (ex. peru purple)', 'Avicularia',
        'Product Avicularia juruensis (ex. peru purple) (Category Avicularia)', 100),
        new Product(11, 'Product Avicularia purpurea - Purple Pinktoe', 'Avicularia',
        'Product Avicularia purpurea - Purple Pinktoe (Category Avicularia)', 100),
        new Product(12, 'Product Caribena versicolor – Martinique PinkToe', 'Avicularia',
        'Product Caribena versicolor – Martinique PinkToe (Category Avicularia)', 100),
        new Product(13, 'Product Poecilotheria miranda - Bengal Ornamental', 'Poecilotheria',
        'Product Poecilotheria miranda - Bengal Ornamental (Category Poecilotheria)', 100),
        new Product(13, 'Product Poecilotheria ornata - Fringed Ornamental', 'Poecilotheria',
        'Product Poecilotheria ornata - Fringed Ornamental (Category Poecilotheria)', 100),
        new Product(14, 'Product Poecilotheria regalis – Indian Ornamental', 'Poecilotheria',
        'Product Poecilotheria regalis – Indian Ornamental (Category Poecilotheria)', 100),
        new Product(15, 'Product Poecilotheria rufilata - Redslate ornamental tarantula', 'Poecilotheria',
        'Product Poecilotheria rufilata - Redslate ornamental tarantula (Category Poecilotheria)', 100),
    ];

    getProducts(): Observable<Product[]> {
        return from([this.products]);
    }

    saveOrder(order: Order): Observable<Order> {
        console.log(JSON.stringify(order));
        return from([order]);
    }
}
