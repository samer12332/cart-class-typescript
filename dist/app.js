"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShoppingCart {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(itemId) {
        this.items.filter(e => e.id != itemId);
    }
    calculateTotalPrice() {
        let price = 0;
        this.items.forEach(e => price += e.price * e.quantity);
        return price;
    }
    displayCart() {
        console.log('Shopping Cart contents: ');
        this.items.forEach(e => {
            console.log(`-${e.name}: ${e.quantity} x ${e.price}$ = ${e.price * e.quantity}$`);
        });
    }
}
const cart = new ShoppingCart();
cart.addItem({ id: 1, name: 'Apple', price: 0.5, quantity: 10 });
cart.addItem({ id: 2, name: 'Banana', price: 0.3, quantity: 5 });
cart.addItem({ id: 3, name: 'Cherry', price: 2.0, quantity: 20 });
cart.displayCart();
cart.removeItem(2);
cart.displayCart();
const totalPrice = cart.calculateTotalPrice();
console.log(`Total Price: $${totalPrice}`);
