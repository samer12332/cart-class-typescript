import { clearScreenDown } from "readline"

interface Item {
    id: number,
    name: string,
    price: number,
    quantity: number
}


class ShoppingCart{
    items: Item[] = [];

    addItem(item: Item): void {
        this.items.push(item)
    }

    removeItem(itemId: number): void {
        this.items.filter(e => e.id != itemId)
    }

    calculateTotalPrice(): number {
        let price = 0;
        this.items.forEach(e => price += e.price * e.quantity);
        return price
    }

    displayCart(): void {
        console.log('Shopping Cart contents: ');
        this.items.forEach(e => {
            console.log(`-${e.name}: ${e.quantity} x ${e.price}$ = ${e.price * e.quantity}$`);
        });
    }
}


const cart = new ShoppingCart();
cart.addItem({id: 1, name: 'Apple', price: 0.5, quantity: 10});
cart.addItem({id: 2, name: 'Banana', price: 0.3, quantity: 5});
cart.addItem({id: 3, name: 'Cherry', price: 2.0, quantity: 20});

cart.displayCart();

cart.removeItem(2);

cart.displayCart();

const totalPrice = cart.calculateTotalPrice();
console.log(`Total Price: $${totalPrice}`);