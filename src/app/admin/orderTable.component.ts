import { Component } from '@angular/core';
import { Order } from '../model/order.model';
import { OrderRepository } from '../model/order.repository';

@Component({
    templateUrl: 'orderTable.component.html'
})
export class OrderTableComponent {

    includeShipped = false;

    constructor(private orderRepo: OrderRepository) {}

    getOrders(): Order[] {
        return this.orderRepo.getOrders().filter(o => this.includeShipped || o.shipped);
    }

    markShipped(order: Order) {
        order.shipped = true;
        this.orderRepo.updateOrder(order);
    }

    delete(id: number) {
        this.orderRepo.deleteOrder(id);
    }
}
