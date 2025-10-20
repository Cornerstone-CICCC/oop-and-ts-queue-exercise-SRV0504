// Create a function called groceryCheckout which processes a queue of customers
// Each customer has a cart (array of items with a name and price).
// Remove customers whose total cost is less than or equal to $50 from the queue.
// FIFO (First-In, First-Out) must be preserved

const Queue = require('../lib/Queue');

function groceryCheckout(queue) {
  const tempQueue = new Queue();

  while (!queue.isEmpty()) {
    const customer = queue.dequeue();

    const total = customer.cart.reduce((sum, item) => sum + item.price, 0);

    if (total > 50) {
      tempQueue.enqueue(customer);
    }
  }

  // Refill original queue with qualified customers
  while (!tempQueue.isEmpty()) {
    queue.enqueue(tempQueue.dequeue());
  }
}

// Test data
const customers = new Queue();
customers.enqueue({ name: "Alice", cart: [{ item: "Milk", price: 10 }, { item: "Bread", price: 5 }] });
customers.enqueue({ name: "Bob", cart: [{ item: "Laptop", price: 500 }, { item: "Mouse", price: 20 }] });
customers.enqueue({ name: "Charlie", cart: [{ item: "Candy", price: 2 }, { item: "Juice", price: 3 }] });

groceryCheckout(customers);
console.log(customers.printQueue());
